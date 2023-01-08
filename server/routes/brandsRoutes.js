const express = require('express');
const brandController = require('./../controllers/brandController');
const router = express.Router();

//for price at glasses price

// router.route('/brand-stats').get(brandController.getBrandStats);
// router.route('/monthly-plan/:year').get(brandController.getMonthlyPlan);

// .route('/top-5-cheap')
// .get(brandController.aliasTopBrand, brandController.getAllBrands)
router
  .route('/')
  .get(brandController.getAllBrands)
  .post(brandController.createBrand);

router
  .route('/:id')
  .get(brandController.getBrand)
  .patch(brandController.updateBrand)
  .delete(brandController.deleteBrand);

module.exports = router;
