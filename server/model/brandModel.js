const mongoose = require('mongoose');
const { Schema } = mongoose;
const slugify = require('slugify');
const EyeGlasses = require('./eyeGlassesModel');
const brandSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Brand must have a name'],
      unique: true,
      trim: true,
      maxLength: [
        30,
        'A Brand Name must have less or equal then 30 characters',
      ],
      minLength: [
        3,
        'A Brand Name must have more or equal then 2 characters',
      ],
    },
    slug: String,
    founded: {
      type: Date,
      min: ['1750-01-01', 'Date must be above 1750/01/01'],
      max: ['2022-12-31', 'Date must be below 2022/12/31'],
    },
    products: {
      type: [String],
      required: [true, 'Products must have a name'],
      enum: {
        values: ['glasses', 'lenses'],
        message: 'Product is either: glasses, lenses',
      },
    },
    createdIn: {
      type: String,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      select: false,
    },
    eyeglasses: [
      { type: mongoose.Schema.Types.ObjectId, ref: 'EyeGlasses' },
    ],
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);
//DOCUMENT MIDDLEWARE: runs before .save() and .create()
brandSchema.pre('save', function (next) {
  this.slug = slugify(this.name, { lower: true });
  next();
});

brandSchema.pre(/^find/, function (next) {
  this.populate({
    path: 'eyeglasses',
    select: '-__v',
  });
  next();
});

// brandSchema.pre('save', async function (next) {
//   const eyeglassesPromises = this.eyeglasses.map(
//     async (id) => await EyeGlasses.findById(id)
//   );
//   this.eyeglasses = await Promise.all(eyeglassesPromises);
//   next();
// });

const Brand = mongoose.model('Brand', brandSchema);

module.exports = Brand;
