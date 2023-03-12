const Order = require('../model/orderModel');

const addOrder = async (req, res) => {
    try {
        const user = req.user.id;
        const { cartItems, totalPrice } = req.body;
        const order = new Order({ user, cartItems, totalPrice });
        await order.save();
        res.status(201).json({ message: 'Order created successfully' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    addOrder
}