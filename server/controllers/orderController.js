const Order = require('../model/orderModel');
const EyeGlasses = require('../model/eyeGlassesModel')

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
        const order = new Order({ user:user, cartItems:cartItems, totalPrice:totalPrice });
        await order.save();
        res.status(201).json({ message: 'Order created successfully' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
}

const getUserOrders = async (req, res) => {
    Order.find({user: req.user.id}).populate('cartItems').exec((err, orders) => {
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
    })
}

module.exports = {
    addOrder,
    getUserOrders
}