const Order = require('../model/orderModel');
const EyeGlasses = require('../model/eyeGlassesModel');
const factory = require('./handlerFactory');
const admin = require('../services/firebase');
const getAllOrders = factory.getAll(Order);
const addOrder = async (req, res) => {
  try {
    const user = req.user.id;
    const { cartItems, totalPrice } = req.body;
    // const glasses = await Promise.all(
    //     cartItems.map((cartItem) =>
    //       EyeGlasses.findById(cartItem.eyeglasses).lean().exec()
    //     )
    //   );
    //   console.log(glasses);
    // const eyeglasses = await EyeGlasses.find({ _id: { $in: cartItems.map(item => item.eyeglass) } });
    const order = new Order({
      user: user,
      cartItems: cartItems,
      totalPrice: totalPrice,
    });
    await order.save();
    res.status(201).json({ message: 'Order created successfully' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

const getUserOrders = async (req, res) => {
  Order.find({ user: req.user.id })
    .populate('cartItems')
    .exec((err, orders) => {
      if (err) {
        console.error(err);
        return res.status(500).send('Internal Server Error');
      }
      res.status(200).json({
        status: 'success',
        result: orders.length,
        data: {
          orders,
        },
      });
    });
};
// const getAllOrders = async (req, res) => {
//   try {
//       const orders = await Order.find().populate('cartItems');

//       const ordersWithEmail = await Promise.all(orders.map(async (order) => {
//           const user = await admin.auth().getUser(order.user);
//           const userEmail = user.email;

//           const orderWithEmail = { ...order._doc, userEmail };
//           return orderWithEmail;
//       }));

//       res.status(200).json({ orders: ordersWithEmail });
//   } catch (err) {
//       console.error(err);
//       res.status(500).json({ message: 'Server error' });
//   }
// }

module.exports = {
  addOrder,
  getUserOrders,
  getAllOrders,
};
