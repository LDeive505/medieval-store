import { ResultSetHeader, RowDataPacket } from 'mysql2';
import connection from './connection';
import { Product } from '../types/Product';

export const createProduct = async (name: string, amount: string): Promise<Product> => {
  const [result] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)',
    [name, amount],
  );

  return { id: result.insertId, name, amount } as Product;
};

export const getAll = async (): Promise<Product[]> => {
  const [result] = await connection.execute<RowDataPacket[]>('SELECT * FROM Trybesmith.Products');
  return result as Product[];
};