const Joi = require("joi");

const id = Joi.string().uuid();
const name = Joi.string().min(3).max(20);
const price = Joi.number().integer().min(1);
const photo = Joi.string().uri();

const createProductSchema = Joi.object({
  name: name.required(),
  price: price.required(),
  photo: photo.required()
});

const updateProductSchema = Joi.object({
  name: name,
  price: price,
  photo: photo
});

const getProductSchema = Joi.object({
  id: id.required()
});


module.exports = {
  createProductSchema,
  updateProductSchema,
  getProductSchema
};
