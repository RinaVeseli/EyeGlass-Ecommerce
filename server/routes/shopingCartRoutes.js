const express = require('express');
const shoppingCartController = require('../controllers/shoppingCartController');
const checkIfAuthenticated = require('../middleware/checkIfAuthenticated');
const shoppingCartRouter = express.Router();

shoppingCartRouter.post("/:productId", checkIfAuthenticated, shoppingCartController.addToShoppingCart);
shoppingCartRouter.get("/", checkIfAuthenticated, shoppingCartController.getCartItems);
shoppingCartRouter.delete("/:id", checkIfAuthenticated, shoppingCartController.deleteCartItem)
shoppingCartRouter.put("/:id", checkIfAuthenticated, shoppingCartController.updateCartItem)
shoppingCartRouter.delete('/', checkIfAuthenticated, shoppingCartController.deleteUserCartItems)

module.exports = shoppingCartRouter;