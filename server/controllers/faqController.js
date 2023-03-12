const Faq = require('./../model/faqsModel');
const factory = require('./handlerFactory');

exports.getAllFaqs = factory.getAll(Faq);
exports.getFaq = factory.getOne(Faq);
exports.createFaq = factory.createOne(Faq);
exports.updateFaq = factory.updateOne(Faq);
exports.deleteFaq = factory.deleteOne(Faq);
