import { Response, Request } from 'express-serve-static-core';
import * as userServices from '../services/userServices';

export const createUser = async (req: Request, res: Response) => {
  const token = await userServices.createUser(req.body);
  res.status(201).json({ token });
};

export const login = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  const token = await userServices.login(username, password);
  if (token === 'Username or password invalid') return res.status(401).json({ message: token });
  res.status(200).json({ token });
};

export const getAllUsers = async () => {
  
};