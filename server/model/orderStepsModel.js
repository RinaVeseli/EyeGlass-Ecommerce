const mongoose = require('mongoose');
const { Schema } = mongoose;
const slugify = require('slugify');

const orderSchema = new Schema({
  number: {
    type: String,
    required: [true, 'Order must have an ordinal number'],
  },
  header: {
    type: String,
    required: [true, 'Header must have a description'],
    trim: true,
    maxLength: [
      100,
      'Header must have less or equal then 200 characters',
    ],
    minLength: [
      9,
      'Header must have more or equal then 30 characters',
    ],
  },
  description: {
    type: String,
    required: [true, 'Order Step must have a description'],
    trim: true,
    maxLength: [
      400,
      'Mission Description must have less or equal then 200 characters',
    ],
    minLength: [
      20,
      'Mission Description must have more or equal then 30 characters',
    ],
  },
  createdAt: {
    type: Date,
    default: Date.now,
    select: false,
  },
});

const OrderStep = mongoose.model('OrderStep', orderSchema);

module.exports = OrderStep;
