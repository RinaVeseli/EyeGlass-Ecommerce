const mongoose = require('mongoose');
const { Schema } = mongoose;
const slugify = require('slugify');

const shapeSchema = new Schema({
  shape: {
    type: String,
    required: [true, 'Shape must have a name'],
    unique: true,
    trim: true,
    maxLength: [
      100,
      'Shape must have less or equal then 100 characters',
    ],
    minLength: [3, 'Shape must have more or equal then 3 characters'],
  },
  // dimensions: {
  //   type: {
  //     width: {
  //       type: Number,
  //       required: true
  //     },
  //     height: {
  //       type: Number,
  //       required: true
  //     }
  //   },
  //   required: true
  // },
  createdAt: {
    type: Date,
    default: Date.now,
    select: false,
  },
});

const Shape = mongoose.model('Shape', shapeSchema);

module.exports = Shape;
