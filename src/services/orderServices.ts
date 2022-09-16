import * as orderModels from '../models/orderModels';
import { DetailedOrder, Order } from '../types/Order';

export const getAllOrders = async (): Promise<DetailedOrder[]> => {
  const orders = await orderModels.getAll();
  return orders;
};

export const createOrder = async (userId: number, productsIds: Array<number>): Promise<Order> => {
  const order = await orderModels.create(userId, productsIds);
  return order;
};