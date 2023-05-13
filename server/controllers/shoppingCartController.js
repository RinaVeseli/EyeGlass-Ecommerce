const express = require('express');
const router = express.Router();
const CartItem = require('../model/shoppingCartItemModel');
const Eyeglasses = require('../model/eyeGlassesModel');

const addToShoppingCart = async (req, res) => {
    try {
      const eyeglass = await Eyeglasses.findById(req.params.productId);
  
      if (!eyeglass) {
        return res.status(404).send('Product not found');
      }
  
      const cartItem = new CartItem({
        user: req.user.id,
        eyeglasses: eyeglass._id,
        name: eyeglass.name,
        price: eyeglass.price,
        quantity: 1,
        total: eyeglass.price * 1
      });
  
      await cartItem.save();
  
      res.status(201).send('Item added to cart');
    } catch (error) {
      console.error(error);
      res.status(500).send('Server error');
    }
  }


const getCartItems = async(req, res) => {
    CartItem.find({user: req.user.id}, (err, cartItems) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Internal Server Error');
        }
        res.status(200).json({
            status: 'success',
            result: cartItems.length,
            data: {
              cartItems,
            },
          });
    });
}

const deleteCartItem = async (req, res) => {
  const cartItemId = req.params.id;
  CartItem.deleteOne({ _id: cartItemId })
    .then(() => {
      res.sendStatus(204); 
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500); 
    });
}

const updateCartItem = async (req, res) => {
  try {
    const cartItemId = req.params.id;
    const { quantity, total } = req.body;

    const updatedCartItem = await CartItem.findByIdAndUpdate(
      cartItemId,
      { quantity, total },
      { new: true }
    );

    res.status(200).json(updatedCartItem);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }}


  const deleteUserCartItems = async (req, res) => {
    const user = req.user.id;
    CartItem.deleteMany({ user: user }, (err) => {
      if (err) {
        res.status(500).send({ message: 'Error deleting cart items' });
      } else {
        res.send({ message: 'Cart items deleted successfully' });
      }
    });
  }

module.exports = {
    addToShoppingCart,
    getCartItems,
    deleteCartItem,
    updateCartItem,
    deleteUserCartItems
};
