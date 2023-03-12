const mongoose = require('mongoose');
const { Schema } = mongoose;
const slugify = require('slugify');

const aboutSchema = new Schema({
  about: {
    type: String,
    required: [true, 'About must have a description'],

    trim: true,
  },
  file: {
    type: String,
    default: 'default.jpg',
  },
  team: {
    type: String,
    required: [true, 'Team must have a description'],

    trim: true,
    // maxLength: [
    //   400,
    //   'Team Description must have less or equal then 200 characters',
    // ],
    // minLength: [
    //   30,
    //   'Team Description must have more or equal then 30 characters',
    // ],
  },
  mission: {
    type: String,
    required: [true, 'Mission must have a description'],

    trim: true,
    // maxLength: [
    //   400,
    //   'Mission Description must have less or equal then 200 characters',
    // ],
    // minLength: [
    //   30,
    //   'Mission Description must have more or equal then 30 characters',
    // ],
  },
  vision: {
    type: String,
    required: [true, 'Vision must have a description'],

    trim: true,
    // maxLength: [
    //   300,
    //   'Vision Description must have less or equal then 200 characters',
    // ],
    // minLength: [
    //   30,
    //   'Vision Description must have more or equal then 30 characters',
    // ],
  },
  quote: {
    type: String,
    required: [true, 'Director Desk must have a quote'],
  },
  directorDesk: {
    type: String,
    required: [true, 'Director Desk must have a description'],

    trim: true,
    // maxLength: [
    //   500,
    //   'Director Desk Description must have less or equal then 300 characters',
    // ],
    // minLength: [
    //   50,
    //   'Director Desk must have more or equal then 50 characters',
    // ],
  },
  contact: {
    type: String,
    required: [true, 'Director Desk must have a description'],

    trim: true,
    maxLength: [
      500,
      'Contact must have less or equal then 300 characters',
    ],
    minLength: [
      50,
      'Contact must have more or equal then 50 characters',
    ],
  },
  createdAt: {
    type: Date,
    default: Date.now,
    select: false,
  },
});

const About = mongoose.model('About', aboutSchema);

module.exports = About;
