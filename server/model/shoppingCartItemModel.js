const mongoose = require('mongoose');

const cartItemSchema = new mongoose.Schema({
  user: {
    type: String,
    required: true
  },
  eyeglasses: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'EyeGlasses',
    required: true
  },
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  quantity: {
    type: Number,
    required: true,
    default: 1
  },
  total: {
    type: Number,
    required: false,
    defult:0
  }
});

const CartItem = mongoose.model('CartItem', cartItemSchema);

module.exports = CartItem;
