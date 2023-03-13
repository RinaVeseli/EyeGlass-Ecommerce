const express = require('express');
const contactsController = require('./../controllers/contactsController');
const router = express.Router();
const checkIfAdmin = require('../middleware/checkIfAdmin');
router
  .route('/top-5-cheap')
  .get(
    contactsController.aliasTopContacts,
    contactsController.getLenses
  );
router
  .route('/')
  .get(contactsController.getLenses)
  .post(
    contactsController.uploadContactsImages,
    contactsController.resizeContactsImages,
    checkIfAdmin,
    contactsController.createLense
  );

router
  .route('/:id')
  .get(contactsController.getLense)
  .patch(
    checkIfAdmin,
    contactsController.uploadContactsImages,
    contactsController.resizeContactsImages,
    contactsController.updateLense
  )
  .delete(checkIfAdmin, contactsController.deleteLense);

module.exports = router;
