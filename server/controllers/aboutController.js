const About = require('./../model/aboutModel');
const APIFeatures = require('./../utils/apiFeatures');
const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');
const multer = require('multer');
const multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/img/about');
  },
  filename: (req, file, cb) => {
    const ext = file.mimetype.split('/')[1];
    cb(null, `about-${Date.now()}.${ext}`);
  },
});
// const multerStorage = multer.memoryStorage();

const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image')) {
    cb(null, true);
  } else {
    cb(
      new AppError('Not an image! Please upload only images.', 400),
      false
    );
  }
};

const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter,
});

exports.uploadAboutPhoto = upload.single('file');

exports.resizeAboutPhoto = catchAsync(async (req, res, next) => {
  if (!req.file) return next();

  req.file.filename = `about-${Date.now()}.jpeg`;

  await sharp(req.file.buffer)
    .resize(500, 500)
    .toFormat('jpeg')
    .jpeg({ quality: 90 })
    .toFile(`public/img/about/${req.file.filename}`);

  next();
});

const filterObj = (obj, ...allowedFields) => {
  const newObj = {};
  Object.keys(obj).forEach((el) => {
    if (allowedFields.includes(el)) newObj[el] = obj[el];
  });
  return newObj;
};

exports.getAbouts = catchAsync(async (req, res, next) => {
  //Excecute Query
  const features = new APIFeatures(About.find(), req.query)
    .filter()
    .sort()
    .limitFields()
    .paginate();
  const abouts = await features.query;
  //Send Response
  res.status(200).json({
    status: 'success',
    results: abouts.length,
    data: {
      abouts,
    },
  });
});

exports.getAbout = catchAsync(async (req, res, next) => {
  const about = await About.findById(req.params.id);
  // Tour.findOne({ _id: req.params.id })

  if (!about) {
    return next(new AppError('No about found with that ID', 404));
  }

  res.status(200).json({
    status: 'success',
    data: {
      about,
    },
  });
});

exports.createAbout = catchAsync(async (req, res, next) => {
  const newAbout = await About.create(req.body);

  res.status(201).json({
    status: 'success',
    data: {
      abouts: newAbout,
    },
  });
});

exports.updateAbout = catchAsync(async (req, res, next) => {
  const filteredBody = filterObj(req.body, 'about');
  if (req.file) filteredBody.file = req.file.filename;
  const about = await About.findByIdAndUpdate(
    req.params.id,
    filteredBody,
    {
      new: true,
      runValidators: true,
    },
    (err, doc) => {
      if (err) {
        return next(new AppError('No about found with that ID', 404));
      }
      res.status(200).json({
        status: 'success',
        data: {
          about: doc,
        },
      });
    }
  );
  if (!about) {
    return next(new AppError('No about found with that ID', 404));
  }
});
exports.deleteAbout = catchAsync(async (req, res, next) => {
  const about = await About.findByIdAndDelete(req.params.id);
  if (!about) {
    return next(new AppError('No about found with that ID', 404));
  }
  res.status(204).json({
    status: 'success',
    data: null,
  });
});
