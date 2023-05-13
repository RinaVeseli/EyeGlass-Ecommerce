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
  },
  type: {
    type: String,
    // required: [true, 'A glasses must have a type'],
    // enum: ['Eyeglasses', 'Sunglasses'],
    // default: 'Eyeglasses',
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
  gender: {
    type: String,
    // enum: ['Men', 'Women', 'Unisex'],
    // default: 'Unisex',
  },
  shape: {
    type: String,
    enum: {
      values: ['Round', 'Rectangle', 'Square', 'Oval', 'Aviator'],
      message:
        'Product is either: round, rectangle, square, oval, aviator',
    },
  },
  ratingsQuantity: {
    type: Number,
    default: 0,
  },
  price: {
    type: Number,
    required: [true, 'An eyeglass must have a price'],
  },
  description: {
    type: String,
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
  brand: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Brand',
    required: [true, 'An eyeglass must have a brand'],
  },
  imageCover: {
    type: String,
  },
  images: [String],
  createdAt: {
    type: Date,
    default: Date.now(),
    select: false,
  },
});
const EyeGlasses = mongoose.model('EyeGlasses', eyeGlassesSchema);
EyeGlasses.find()
  .populate('brand')
  .exec((err, eyeglasses) => {
    if (err) {
      console.error(err);
    } else {
      return eyeglasses;
    }
  });
module.exports = EyeGlasses;
