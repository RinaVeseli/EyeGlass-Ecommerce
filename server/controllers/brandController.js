const Brand = require('./../model/brandModel');
const APIFeatures = require('./../utils/apiFeatures');
// exports.aliasTopBrand = (req, res, next) => {
//   req.query.limit = '5';
//   req.query.sort= '-ratingAverage,price';
//   req.query.field='name,price,ratingAverage,summary,difficulty';
// };

exports.getAllBrands = async (req, res) => {
  try {
    //Excecute Query
    const features = new APIFeatures(Brand.find(), req.query)
      .filter()
      .sort()
      .limitFields()
      .paginate();
    const brands = await features.query;
    //Send Response
    res.status(200).json({
      status: 'OK',
      results: brands.length,
      data: {
        brands,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: 'fail',
      message: error,
    });
  }
};

exports.getBrand = async (req, res) => {
  try {
    const brand = await Brand.findById(req.params.id);
    // Brand.findOne({_id: req.params.id})
    res.status(200).json({
      status: 'OK',
      data: {
        brand,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: 'fail',
      message: error,
    });
  }
};

exports.createBrand = async (req, res) => {
  try {
    const newBrand = await Brand.create(req.body);

    res.status(201).json({
      status: 'OK',
      data: {
        brands: newBrand,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error,
    });
  }
};

exports.updateBrand = async (req, res) => {
  try {
    const brand = await Brand.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    res.status(200).json({
      status: 'Ok',
      data: {
        brand,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: 'fail',
      message: error,
    });
  }
};
exports.deleteBrand = async (req, res) => {
  try {
    await Brand.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: 'OK',
      data: null,
    });
  } catch (error) {
    res.status(404).json({
      status: 'fail',
      message: error,
    });
  }
};
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
