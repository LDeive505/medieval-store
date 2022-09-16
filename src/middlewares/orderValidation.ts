import { NextFunction, Request, Response } from 'express';
import joi from 'joi';

const schema = joi.object({
  productsIds: joi.array().items(joi.number()).min(1).required()
    .messages({ 'array.min': '"productsIds" must include only numbers' }),
});

export default function userValidation(req: Request, res: Response, next: NextFunction) {
  const { error } = schema.validate(req.body);

  if (error) {
    const { type } = error.details[0];
    const code = (type.includes('min')) || (type.includes('base')) ? 422 : 400;
    return res.status(code).json({ message: error.details[0].message });
  }
  next();
}
