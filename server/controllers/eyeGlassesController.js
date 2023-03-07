const EyeGlasses = require('./../model/eyeGlassesModel');
const APIFeatures = require('./../utils/apiFeatures');
const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');

exports.aliasTopEyeGlasses = (req, res, next) => {
  req.query.limit = '5';
  req.query.sort = '-price';
  req.query.field = 'name,price,ratingAverage,frameSize';
  next();
};

exports.getAllEyeGlasses = catchAsync(async (req, res, next) => {
  //Excecute Query
  const features = new APIFeatures(EyeGlasses.find(), req.query)
    .filter()
    .sort()
    .limitFields()
    .paginate();
  const eyeGlassess = await features.query;
  //Send Response
  res.status(200).json({
    status: 'success',
    results: eyeGlassess.length,
    data: {
      eyeGlassess,
    },
  });
});

exports.getEyeGlass = catchAsync(async (req, res, next) => {
  const eyeglass = await EyeGlasses.findById(req.params.id);
  // EyeGlasses.findOne({ _id: req.params.id })

  if (!eyeglass) {
    return next(new AppError('No eyeglass found with that ID', 404));
  }

  res.status(200).json({
    status: 'success',
    data: {
      eyeglass,
    },
  });
});

exports.createEyeGlass = catchAsync(async (req, res, next) => {
  const newEyeGlass = await EyeGlasses.create(req.body);

  res.status(201).json({
    status: 'success',
    data: {
      eyeGlasses: newEyeGlass,
    },
  });
});

exports.updateEyeGlass = catchAsync(async (req, res, next) => {
  const eyeglass = await EyeGlasses.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );
  if (!eyeglass) {
    return next(new AppError('No eyeglass found with that ID', 404));
  }
  res.status(200).json({
    status: 'success',
    data: {
      eyeglass,
    },
  });
});
exports.deleteEyeGlass = catchAsync(async (req, res, next) => {
  const eyeglass = await EyeGlasses.findByIdAndDelete(req.params.id);
  if (!eyeglass) {
    return next(new AppError('No eyeglass found with that ID', 404));
  }
  res.status(204).json({
    status: 'success',
    data: null,
  });
});
