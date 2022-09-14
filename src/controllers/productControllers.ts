import { Response, Request } from 'express';
import * as productServices from '../services/productServices';

export const createProduct = async (req: Request, res: Response) => {
  const product = await productServices.createProduct(req.body);
  res.status(201).json(product);
};

export const getAllProducts = async (req: Request, res: Response) => {
  const products = await productServices.getAllProducts();
  res.status(200).json(products);
};
