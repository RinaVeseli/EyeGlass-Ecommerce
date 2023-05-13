const express = require('express');
const reviewController = require('../controllers/reviewController');
const checkIfAuthenticated = require('../middleware/checkIfAuthenticated');
const reviewRouter = express.Router();

reviewRouter.post(
  '/',
  checkIfAuthenticated,
  reviewController.addReview
);
reviewRouter.get(
  '/',
  checkIfAuthenticated,
  reviewController.getReviews
);

module.exports = reviewRouter;
