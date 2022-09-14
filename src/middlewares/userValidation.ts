import { NextFunction, Request, Response } from 'express';
import joi from 'joi';

const schema = joi.object({
  username: joi.string().min(3).required(),
  classe: joi.string().min(3).required(),
  level: joi.number().integer().min(1).required(),
  password: joi.string().min(8).required(),
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
