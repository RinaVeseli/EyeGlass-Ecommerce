const express = require('express');
const wishlistController = require('../controllers/wishlistController');
const checkIfAuthenticated = require('../middleware/checkIfAuthenticated');
const wishlistRouter = express.Router();

wishlistRouter.post('/', checkIfAuthenticated, wishlistController.addToWishlist);
wishlistRouter.delete('/:id', checkIfAuthenticated, wishlistController.deleteWishlist)
wishlistRouter.get('/',checkIfAuthenticated,wishlistController.getUserWishlist)
module.exports = wishlistRouter;