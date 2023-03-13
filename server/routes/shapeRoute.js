const express = require('express');
const shapeController = require('./../controllers/shapeController');
const router = express.Router();
const checkIfAdmin = require('../middleware/checkIfAdmin');
router
  .route('/')
  .get(shapeController.getAllShapes)
  .post(checkIfAdmin, shapeController.createShape);

router
  .route('/:id')
  .get(shapeController.getShape)
  .patch(checkIfAdmin, shapeController.updateShape)
  .delete(checkIfAdmin, shapeController.deleteShape);

module.exports = router;
