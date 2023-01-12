const Brand = require('./../model/brandModel');
const APIFeatures = require('./../utils/apiFeatures');
const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');
// exports.aliasTopBrand = (req, res, next) => {
//   req.query.limit = '5';
//   req.query.sort= '-ratingAverage,price';
//   req.query.field='name,price,ratingAverage,summary,difficulty';
// };

exports.getAllBrands = catchAsync(async (req, res, next) => {
  //Excecute Query
  const features = new APIFeatures(Brand.find(), req.query)
    .filter()
    .sort()
    .limitFields()
    .paginate();
  const brands = await features.query;
  //Send Response
  res.status(200).json({
    status: 'success',
    results: tours.length,
    data: {
      brands,
    },
  });
});

exports.getBrand = catchAsync(async (req, res, next) => {
  const brand = await Brand.findById(req.params.id);
  // Tour.findOne({ _id: req.params.id })

  if (!brand) {
    return next(new AppError('No brand found with that ID', 404));
  }

  res.status(200).json({
    status: 'success',
    data: {
      brand,
    },
  });
});

exports.createBrand = catchAsync(async (req, res, next) => {
  const newBrand = await Brand.create(req.body);

  res.status(201).json({
    status: 'success',
    data: {
      brands: newBrand,
    },
  });
});

exports.updateBrand = catchAsync(async (req, res, next) => {
  const brand = await Brand.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );
  if (!brand) {
    return next(new AppError('No brand found with that ID', 404));
  }
  res.status(200).json({
    status: 'success',
    data: {
      brand,
    },
  });
});
exports.deleteBrand = catchAsync(async (req, res, next) => {
  const brand = await Brand.findByIdAndDelete(req.params.id);
  if (!brand) {
    return next(new AppError('No brand found with that ID', 404));
  }
  res.status(204).json({
    status: 'success',
    data: null,
  });
});
// ----------PIPELINE-----------------averagerating avgprice min max price
// exports.getBrandStats = async (req, res) => {
//   try {
//     const stats = await Brand.aggregate([
//       {
//         $match: { ratingsAverage: { $gte: 4.5 } },
//       },
//       {
//         $group: {
//           _id: { $toUpper: '$name' },
//           numBrands: { $sum: 1 },
//           numRatings: { $sum: '$ratingsQuantity' },
//           avgrating: { $avg: '$ratingsAverage' },
//           avgPrice: { $avg: '$price' },
//           minPrice: { $min: '$price' },
//           maxPrice: { $max: '$price' },
//         },
//       },
//       {
//         $sort: {
//           avgPrice: 1,
//         },
//       },
//     ]);
//     res.status(200).json({
//       status: 'OK',
//       data: {
//         stats,
//       },
//     });
//   } catch (error) {
//     res.status(404).json({
//       status: 'fail',
//       message: error,
//     });
//   }
// };

//Sa tour per muj ka, cili o muji ma i ngarkum

// exports.getMonthlyPlan = async (req, res) => {
//   try {
//     const year = req.params.year * 1; // 2021

//     const plan = await Tour.aggregate([
//       {
//         $unwind: '$startDates'
//       },
//       {
//         $match: {
//           startDates: {
//             $gte: new Date(`${year}-01-01`),
//             $lte: new Date(`${year}-12-31`)
//           }
//         }
//       },
//       {
//         $group: {
//           _id: { $month: '$startDates' },
//           numTourStarts: { $sum: 1 },
//           tours: { $push: '$name' }
//         }
//       },
//       {
//         $addFields: { month: '$_id' }
//       },
//       {
//         $project: {
//           _id: 0
//         }
//       },
//       {
//         $sort: { numTourStarts: -1 }
//       },
//       {
//         $limit: 12
//       }
//     ]);

//     res.status(200).json({
//       status: 'success',
//       data: {
//         plan
//       }
//     });
//   } catch (err) {
//     res.status(404).json({
//       status: 'fail',
//       message: err
//     });
//   }
// };
