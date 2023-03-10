const Joi = require("joi");

const schema = Joi.object({
  email: Joi.string().email().min(5).max(30).required(),
  password: Joi.string().min(5).max(30).required(),
});

module.exports = schema;