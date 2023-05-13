const Review = require('../model/reviewModel');
const admin = require('../services/firebase');

const addReview = async (req, res) => {
  try {
    const user = req.user.id;
    const review = new Review({
      user: user,
      name: req.body.name,
      review: req.body.review,
      rating: req.body.rating,
    });
    await review.save();
    res.status(201).json({ message: 'Order created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error submitting review');
  }
};

const getReviews = async (req, res) => {
  try {
    const reviews = await Review.find();
    const reviewsWithEmails = await Promise.all(
      reviews.map(async (review) => {
        const user = await admin.auth().getUser(review.user);
        const userEmail = user.email;
        return { ...review.toObject(), userEmail };
      })
    );
    res.json(reviewsWithEmails);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
};

module.exports = {
  addReview,
  getReviews,
};
