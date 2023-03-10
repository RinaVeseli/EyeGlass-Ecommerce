const express = require('express');
const aboutController = require('./../controllers/aboutController');
const router = express.Router();

router
  .route('/')
  .get(aboutController.getAbouts)
  .post(aboutController.createAbout);

router
  .route('/:id')
  .get(aboutController.getAbout)
  .patch(
    aboutController.uploadAboutPhoto,
    aboutController.updateAbout
  )
  .delete(aboutController.deleteAbout);

module.exports = router;


