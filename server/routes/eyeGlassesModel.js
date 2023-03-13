const express = require('express');
const eyeGlassesController = require('./../controllers/eyeGlassesController');
const router = express.Router();
const checkIfAdmin = require('../middleware/checkIfAdmin');
//for price at glasses price

// router.route('/brand-stats').get(brandController.getBrandStats);
// router.route('/monthly-plan/:year').get(brandController.getMonthlyPlan);

router
  .route('/top-5-cheap')
  .get(
    eyeGlassesController.aliasTopEyeGlasses,
    eyeGlassesController.getAllEyeGlasses
  );
router
  .route('/')
  .get(eyeGlassesController.getAllEyeGlasses)
  .post(
    checkIfAdmin,
    eyeGlassesController.uploadEyeglassesImages,
    eyeGlassesController.resizeEyeglassesImages,
    eyeGlassesController.createEyeglass
  );

router
  .route('/:id')
  .get(eyeGlassesController.getEyeGlass)
  .patch(
    checkIfAdmin,
    eyeGlassesController.uploadEyeglassesImages,
    eyeGlassesController.resizeEyeglassesImages,
    eyeGlassesController.updateEyeGlass
  )
  .delete(checkIfAdmin, eyeGlassesController.deleteEyeGlass);

module.exports = router;
