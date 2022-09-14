import { NextFunction, Request, Response } from 'express';
import joi from 'joi';

const schema = joi.object({
  name: joi.string().min(3).required(),
  amount: joi.string().min(3).required(),
});

export default async function productValidation(req: Request, res: Response, next: NextFunction) {
  const { name, amount } = req.body;
  const { error } = schema.validate({ name, amount });
  
  if (error) {
    const { type } = error.details[0];
    const code = (type === 'string.min') || (type === 'string.base') ? 422 : 400;
    return res.status(code).json({ message: error.details[0].message });
  }
  next();
}