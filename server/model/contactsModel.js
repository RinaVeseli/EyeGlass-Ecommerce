const mongoose = require('mongoose');
const { Schema } = mongoose;
const slugify = require('slugify');
const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Contacts must have a name'],

    trim: true,
    maxLength: [
      50,
      'Must have a name less or equal then 50 characters',
    ],
    minLength: [
      3,
      'Must have a name more or equal then 2 characters',
    ],
  },

  color: {
    type: String,
    required: [true, 'Contacts must have color'],
    trim: true,
  },
  material: {
    type: String,
    // required: [true, 'Contacts must have material'],
    // trim: true,
  },
  price: {
    type: Number,
    required: [true, 'You must have a price'],
  },
  description: {
    type: String,
    minLength: [
      3,
      'Must have a description more or equal then 3 characters',
    ],
  },
  imageCover: {
    type: String,
    // required: [true, 'An eyeglass must have an image'],
    default: 'default.jpg',
  },
  images: [String],

  createdAt: {
    type: Date,
    default: Date.now,
    select: false,
  },
});

const Lenses = mongoose.model('Lenses', contactSchema);

module.exports = Lenses;
