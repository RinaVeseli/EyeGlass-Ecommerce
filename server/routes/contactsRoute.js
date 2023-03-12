const express = require('express');
const contactsController = require('./../controllers/contactsController');
const router = express.Router();

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
    contactsController.createLense
  );

router
  .route('/:id')
  .get(contactsController.getLense)
  .patch(
    contactsController.uploadContactsImages,
    contactsController.resizeContactsImages,
    contactsController.updateLense
  )
  .delete(contactsController.deleteLense);

module.exports = router;
