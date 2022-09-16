import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { DecodedUser } from '../types/User';
import * as userModels from '../models/userModels';

const jwtSecret = process.env.JWT_SECRET || 'theAnswerIs42';

export const tokenGenerator = (id: number, username: string):string => {
  const token = jwt.sign({ id, username }, jwtSecret, { algorithm: 'HS256', expiresIn: '1d' });
  return token;
};

export const tokenValidation = async (req: Request, res: Response, next: NextFunction) => { 
  const token = req.headers.authorization;
  
  if (!token) return res.status(401).json({ message: 'Token not found' });

  try {
    const { id } = jwt.verify(token, jwtSecret) as DecodedUser;
    const user = await userModels.getById(id);  
    if (!user) return res.status(401).json({ message: 'Invalid token' });

    res.locals.userId = user.id;
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' });
  }
  next();
};