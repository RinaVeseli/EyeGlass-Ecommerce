const express = require('express');
const shapeController = require('./../controllers/shapeController');
const router = express.Router();

router
  .route('/')
  .get(shapeController.getAllShapes)
  .post(shapeController.createShape);

router
  .route('/:id')
  .get(shapeController.getShape)
  .patch(shapeController.updateShape)
  .delete(shapeController.deleteShape);

module.exports = router;
