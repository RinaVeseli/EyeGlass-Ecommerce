const express = require('express');
const checkIfAdmin = require('../middleware/checkIfAdmin');
const checkIfAuthenticated = require('../middleware/checkIfAuthenticated');
const brandController = require('./../controllers/brandController');
const router = express.Router();

// const userController = require('../controllers/userController');
// const { isAdmin } = require('../middleware/auth');
//for price at glasses price

// router.route('/brand-stats').get(brandController.getBrandStats);
// router.route('/monthly-plan/:year').get(brandController.getMonthlyPlan);

// .route('/top-5-cheap')
// .get(brandController.aliasTopBrand, brandController.getAllBrands)
// router.use(checkIfAuthenticated)

router
  .route('/')
  .get(brandController.getAllBrands)
  .post(checkIfAdmin, brandController.createBrand);

router
  .route('/:id')
  .get(brandController.getBrand)
  .patch(brandController.updateBrand)
  .delete(brandController.deleteBrand);

module.exports = router;
