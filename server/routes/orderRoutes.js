const express = require('express');
const orderController = require('../controllers/orderController');
const checkIfAuthenticated = require('../middleware/checkIfAuthenticated');
const orderRouter = express.Router();
const checkIfAdmin = require('../middleware/checkIfAdmin');
orderRouter.post('/', checkIfAuthenticated, orderController.addOrder);
orderRouter.get('/', checkIfAuthenticated, orderController.getUserOrders)

module.exports = orderRouter;