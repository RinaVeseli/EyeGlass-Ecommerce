const mongoose = require('mongoose');
const { Schema } = mongoose;
const slugify = require('slugify');

const faqSchema = new Schema({
  question: {
    type: String,
    required: [true, 'Faqs must have Question'],
    unique: true,
    trim: true,
    maxLength: [
      100,
      'Question must have less or equal then 100 characters',
    ],
    minLength: [
      3,
      'Question must have more or equal then 3 characters',
    ],
  },
  answer: {
    type: String,
    required: [true, 'Faqs must have answer'],
    unique: true,
    trim: true,

    minLength: [
      3,
      'Question must have more or equal then 3 characters',
    ],
  },
  createdAt: {
    type: Date,
    default: Date.now,
    select: false,
  },
});

const Faq = mongoose.model('Faq', faqSchema);

module.exports = Faq;
