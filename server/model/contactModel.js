const mongoose = require('mongoose');
const { Schema } = mongoose;
const slugify = require('slugify');
const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'You must have a name'],

    trim: true,
    maxLength: [
      50,
      'Must have a name less or equal then 30 characters',
    ],
    minLength: [
      3,
      'Must have a name more or equal then 2 characters',
    ],
  },
  number: {
    type: String,
    required: [true, 'You must have a number'],
    unique: true,
    trim: true,
    maxLength: [
      50,
      'Must have a number less or equal then 30 characters',
    ],
    minLength: [
      3,
      'Must have a number more or equal then 2 characters',
    ],
  },
  email: {
    type: String,
    required: [true, 'You must have an email'],

    trim: true,
    maxLength: [
      50,
      'Must have a number less or equal then 30 characters',
    ],
    minLength: [
      3,
      'Must have a number more or equal then 2 characters',
    ],
  },

  enquiry: {
    type: String,
    minLength: [
      3,
      'Must have a number more or equal then 2 characters',
    ],
  },

  createdAt: {
    type: Date,
    default: Date.now,
    select: false,
  },
});

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;
