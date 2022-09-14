import { Response, Request } from 'express-serve-static-core';
import * as userServices from '../services/userServices';

export const createUser = async (req: Request, res: Response) => {
  const token = await userServices.createUser(req.body);
  res.status(201).json({ token });
};

export const getAllUsers = async () => {
};