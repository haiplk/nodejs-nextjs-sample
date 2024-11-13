import Joi from 'joi';

export const bookValidationSchema = Joi.object({
  author: Joi.string().required(),
  title: Joi.string().min(5).required(),
});
