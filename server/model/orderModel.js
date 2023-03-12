const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  user: {
    type: String,
    required: true
  },
  cartItems: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'CartItem',
    required: true
  }],
  totalPrice: {
    type: Number,
    required: true
  }
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;