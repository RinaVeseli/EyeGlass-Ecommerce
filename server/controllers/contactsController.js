const Lenses = require('./../model/contactsModel');
const APIFeatures = require('./../utils/apiFeatures');
const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');
const factory = require('./handlerFactory');
const multer = require('multer');
const sharp = require('sharp');
const Brand = require('./../model/brandModel');
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

exports.aliasTopContacts = (req, res, next) => {
  req.query.limit = '1';
  req.query.sort = '-price';
  req.query.field = 'name,price';

  next();
};

exports.uploadContactsImages = upload.fields([
  { name: 'imageCover', maxCount: 1 },
  { name: 'images', maxCount: 6 },
]);

exports.resizeContactsImages = catchAsync(async (req, res, next) => {
  if (!req.files || !req.files.imageCover || !req.files.images) {
    return next();
  }

  // Generate unique filenames for the uploaded images
  const imageCoverFilename = `contacts-${Date.now()}-cover.jpeg`;
  const imageFilenames = req.files.images.map(
    (file, i) => `contacts-${Date.now()}-${i + 1}.jpeg`
  );

  // 1) Cover image
  await sharp(req.files.imageCover[0].buffer)
    .toFormat('jpeg')
    .jpeg({ quality: 90 })
    .toFile(`public/img/contacts/${imageCoverFilename}`);

  req.body.imageCover = imageCoverFilename;

  // 2) Images
  await Promise.all(
    req.files.images.map(async (file, i) => {
      await sharp(file.buffer)
        .toFormat('jpeg')
        .jpeg({ quality: 90 })
        .toFile(`public/img/contacts/${imageFilenames[i]}`);
    })
  );

  req.body.images = imageFilenames;

  next();
});

exports.getLenses = factory.getAll(Lenses);
exports.getLense = factory.getOne(Lenses);
exports.createLense = async (req, res) => {
  try {
    const brand = await Brand.findById(req.body.brand);
    if (!brand) {
      return res.status(400).json({ error: 'Brand not found' });
    }
    const lenses = await Lenses.create({
      name: req.body.name,
      color: req.body.color,
      type: req.body.type,
      price: req.body.price,
      brand: req.body.brand,
      description: req.body.description,
      material: req.body.material,
      type: req.body.type,
      imageCover: req.body.imageCover,
      images: req.body.images,
    });

    brand.contacts.push(lenses);
    await brand.save();

    res.status(201).json({
      status: 'success',
      data: {
        lenses,
      },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};
exports.updateLense = factory.updateOne(Lenses);
exports.deleteLense = factory.deleteOne(Lenses);
