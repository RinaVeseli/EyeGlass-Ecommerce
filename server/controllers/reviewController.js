const Review = require('../model/reviewModel');
const catchAsync = require('../utils/catchAsync');
const firebase = require('../services/firebase');
exports.getAllReviews = async (req, res, next) => {
  const reviews = await Review.find();

  res.status(200).json({
    status: 'success',
    result: reviews.length,
    data: {
      reviews,
    },
  });
};

// exports.createReview = catchAsync(async (req, res, next) => {
//   try {
//     // Check if authorization header is present
//     if (!req.headers.authorization) {
//       throw new Error('Authorization header not found');
//     }

//     // Get UID of authenticated user from Firebase Authentication token
//     const token = req.headers.authorization.split(' ')[1];
//     const decodedToken = await firebase.auth().verifyIdToken(token);
//     const uid = decodedToken.uid;

//     // Get user details from Firebase Authentication
//     const userRecord = await firebase.auth().getUser(uid);

//     // Create new review object using data from request body and user details
//     const review = new Review({
//       userId: uid,

//       rating: req.body.rating,
//       // comment: req.body.comment,
//     });

//     // Save review to database
//     await review.save();

//     // Return success response to user
//     res.status(200).json({ message: 'Review added successfully' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });
