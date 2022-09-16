import { Response, Request } from 'express-serve-static-core';
import * as orderServices from '../services/orderServices';

export const getAllOrders = async (req: Request, res: Response) => {
  const orders = await orderServices.getAllOrders();
  res.status(200).json(orders);  
};

export const createOrder = async (req: Request, res: Response) => {
  const { userId } = res.locals;
  const { productsIds } = req.body;
  
  const order = await orderServices.createOrder(userId, productsIds);
  res.status(201).json(order);
};