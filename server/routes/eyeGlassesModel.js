const express = require('express');
const eyeGlassesController = require('./../controllers/eyeGlassesController');
const router = express.Router();

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
    eyeGlassesController.uploadEyeglassesImages,
    eyeGlassesController.resizeEyeglassesImages,
    eyeGlassesController.createEyeGlass
  );

router
  .route('/:id')
  .get(eyeGlassesController.getEyeGlass)
  .patch(
    eyeGlassesController.uploadEyeglassesImages,
    eyeGlassesController.resizeEyeglassesImages,
    eyeGlassesController.updateEyeGlass
  )
  .delete(eyeGlassesController.deleteEyeGlass);

module.exports = router;
