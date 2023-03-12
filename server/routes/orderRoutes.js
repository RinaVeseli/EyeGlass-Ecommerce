const express = require('express');
const orderController = require('../controllers/orderController');
const checkIfAuthenticated = require('../middleware/checkIfAuthenticated');
const orderRouter = express.Router();

orderRouter.post('/', checkIfAuthenticated, orderController.addOrder)

module.exports = orderRouter;