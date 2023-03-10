const mongoose = require('mongoose');
const slugify = require('slugify');
const validator = require('validator');
const eyeGlassesSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, 'An eyeglass must have a name'],
    unique: true,
    trim: true,
    minlength: [
      5,
      'An EyeGlass name must have more or equal then 5 characters',
    ],
    maxlength: [
      40,
      'An EyeGlass name must have more or equal then 40 characters',
    ],
    // validate: [
    //   validator.isAlpha,
    //   'EyeGlass name must only contain characters',
    // ],
  },
  color: {
    type: String,
    required: [true, 'An eyeglass must have a color'],
    trim: true,
  },
  frameSize: {
    type: String,
    required: [true, 'An eyeglass must have a frameSize'],
    trim: true,
  },
  ratingsAverage: {
    type: Number,
    default: 4.5,
  },
  ratingsQuantity: {
    type: Number,
    default: 0,
  },
  price: {
    type: Number,
    required: [true, 'An eyeglass must have a price'],
  },
  priceDiscount: {
    type: Number,
    // validate: {
    //   validator: function (val) {
    //     return val < this.price;
    //   },
    //   message:
    //     'Discount price ({VALUE}) should be below regular price',
    // },
  },
  description: {
    type: String,
    trim: true,
  },
  imageCover: {
    type: String,
    required: [true, 'An eyeglass must have an image'],
  },
  images: [String],
  createdAt: {
    type: Date,
    default: Date.now(),
    select: false,
  },
});
const EyeGlasses = mongoose.model('EyeGlasses', eyeGlassesSchema);

module.exports = EyeGlasses;
