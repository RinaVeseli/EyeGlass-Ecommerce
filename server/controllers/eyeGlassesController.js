const EyeGlasses = require('./../model/eyeGlassesModel');
const Brand = require('./../model/brandModel');
const APIFeatures = require('./../utils/apiFeatures');
const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');
const factory = require('./handlerFactory');
const multer = require('multer');
const sharp = require('sharp');

const multerStorage = multer.memoryStorage();

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

exports.aliasTopEyeGlasses = (req, res, next) => {
  req.query.limit = '5';
  req.query.sort = '-price';
  req.query.field = 'name,price,ratingAverage,frameSize';
  next();
};

exports.uploadEyeglassesImages = upload.fields([
  { name: 'imageCover', maxCount: 1 },
  { name: 'images', maxCount: 6 },
]);

exports.resizeEyeglassesImages = catchAsync(
  async (req, res, next) => {
    if (!req.files || !req.files.imageCover || !req.files.images) {
      return next();
    }

    // Generate unique filenames for the uploaded images
    const imageCoverFilename = `eyeglasses-${Date.now()}-cover.jpeg`;
    const imageFilenames = req.files.images.map(
      (file, i) => `eyeglasses-${Date.now()}-${i + 1}.jpeg`
    );

    // 1) Cover image
    await sharp(req.files.imageCover[0].buffer)
      .resize(2000, 1333)
      .toFormat('jpeg')
      .jpeg({ quality: 90 })
      .toFile(`public/img/eyeglasses/${imageCoverFilename}`);

    req.body.imageCover = imageCoverFilename;

    // 2) Images
    await Promise.all(
      req.files.images.map(async (file, i) => {
        await sharp(file.buffer)
          .toFormat('jpeg')
          .jpeg({ quality: 90 })
          .toFile(`public/img/eyeglasses/${imageFilenames[i]}`);
      })
    );

    req.body.images = imageFilenames;

    next();
  }
);

exports.getAllEyeGlasses = factory.getAll(EyeGlasses);
exports.getEyeGlass = factory.getOne(EyeGlasses, { path: 'reviews' });
exports.createEyeglass = async (req, res) => {
  try {
    // Check if the brand exists
    const brand = await Brand.findById(req.body.brandId);
    if (!brand) {
      return res.status(400).json({ error: 'Brand not found' });
    }

    // Create the new eyeglass
    const eyeglass = await EyeGlasses.create({
      name: req.body.name,
      color: req.body.color,
      frameSize: req.body.frameSize,
      price: req.body.price,
      brand: req.body.brandId,
      imageCover: req.body.imageCover,
      images: req.body.images,
    });

    // Add the eyeglass to the brand's list of eyeglasses
    brand.eyeglasses.push(eyeglass);
    await brand.save();

    res.status(201).json({
      status: 'success',
      data: {
        eyeglass,
      },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};
exports.updateEyeGlass = factory.updateOne(EyeGlasses);
exports.deleteEyeGlass = factory.deleteOne(EyeGlasses);
