const mongoose = require('mongoose');

const wishlistSchema = new mongoose.Schema({
  user: {
    type: String,
    required: true
  },
  eyeglasses: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'EyeGlasses',
    required: true
  },
  addedAt: {
    type: Date,
    default: Date.now
  }
});

const Wishlist = mongoose.model('Wishlist', wishlistSchema);

module.exports = Wishlist;