const express = require('express');
const orderStepsController = require('./../controllers/orderStepsController');
const router = express.Router();

router
  .route('/')
  .get(orderStepsController.getAllOrderSteps)
  .post(orderStepsController.createOrderSteps);

router
  .route('/:id')
  .get(orderStepsController.getOrderStep)
  .patch(orderStepsController.updateOrderStep)
  .delete(orderStepsController.deleteOrderStep);

module.exports = router;
