import * as orderModels from '../models/orderModels';
import { DetailedOrder } from '../types/Order';

export const getAllOrders = async (): Promise<DetailedOrder[]> => {
  const orders = await orderModels.getAll();
  return orders;
};

export const createOrder = async () => {

};