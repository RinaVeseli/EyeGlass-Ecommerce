const express = require('express');
const orderStepsController = require('./../controllers/orderStepsController');
const router = express.Router();
const checkIfAdmin = require('../middleware/checkIfAdmin');
router
  .route('/')
  .get(orderStepsController.getAllOrderSteps)
  .post(checkIfAdmin, orderStepsController.createOrderSteps);

router
  .route('/:id')
  .get(orderStepsController.getOrderStep)
  .patch(checkIfAdmin, orderStepsController.updateOrderStep)
  .delete(checkIfAdmin, orderStepsController.deleteOrderStep);

module.exports = router;
