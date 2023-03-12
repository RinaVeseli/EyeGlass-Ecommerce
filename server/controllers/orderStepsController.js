const OrderStep = require('./../model/orderStepsModel');
const factory = require('./handlerFactory');

exports.getAllOrderSteps = factory.getAll(OrderStep);
exports.getOrderStep = factory.getOne(OrderStep);
exports.createOrderSteps = factory.createOne(OrderStep);
exports.updateOrderStep = factory.updateOne(OrderStep);
exports.deleteOrderStep = factory.deleteOne(OrderStep);
