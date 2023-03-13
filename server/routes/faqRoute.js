const express = require('express');
const faqController = require('./../controllers/faqController');
const router = express.Router();
const checkIfAdmin = require('../middleware/checkIfAdmin');
router
  .route('/')
  .get(faqController.getAllFaqs)
  .post(checkIfAdmin, faqController.createFaq);

router
  .route('/:id')
  .get(faqController.getFaq)
  .patch(checkIfAdmin, faqController.updateFaq)
  .delete(checkIfAdmin, faqController.deleteFaq);

module.exports = router;
