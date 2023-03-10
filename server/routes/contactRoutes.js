const express = require('express');
const contactController = require('./../controllers/contactController');
const router = express.Router();

router
  .route('/')
  .get(contactController.getContacts)
  .post(contactController.createContact);

router
  .route('/:id')
  .get(contactController.getContact)
  .patch(contactController.updateContact)
  .delete(contactController.deleteContact);

module.exports = router;
