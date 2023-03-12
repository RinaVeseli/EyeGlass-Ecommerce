const express = require('express');
const faqController = require('./../controllers/faqController');
const router = express.Router();

router
  .route('/')
  .get(faqController.getAllFaqs)
  .post(faqController.createFaq);

router
  .route('/:id')
  .get(faqController.getFaq)
  .patch(faqController.updateFaq)
  .delete(faqController.deleteFaq);

module.exports = router;
