import * as productModels from '../models/productModels';
import { Product } from '../types/Product';

export const createProduct = async (product: Product): Promise<Product> => {
  const { name, amount } = product;
  const newProduct = await productModels.createProduct(name, amount);
  return newProduct;
};

export const getAllProducts = (): Promise<Product[]> => {
  const products = productModels.getAll();
  return products;
};
