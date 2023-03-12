const Shape = require('./../model/shapeModel');
const factory = require('./handlerFactory');

exports.getAllShapes = factory.getAll(Shape);
exports.getShape = factory.getOne(Shape);
exports.createShape = factory.createOne(Shape);
exports.updateShape = factory.updateOne(Shape);
exports.deleteShape = factory.deleteOne(Shape);
