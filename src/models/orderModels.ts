import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { DetailedOrder, Order } from '../types/Order';
import connection from './connection';

export const getAll = async (): Promise<DetailedOrder[]> => {
  const [result] = await connection.execute<RowDataPacket[]>(
    `SELECT
      o.id, o.userId, JSON_ARRAYAGG(p.id) AS productsIds
    FROM
      Trybesmith.Orders as o
        INNER JOIN 
      Trybesmith.Products AS p
    ON o.id = p.orderId
    GROUP BY o.id
    ORDER BY o.userId`,
  );

  return result as DetailedOrder[];
};

export const create = async (userId: number, productsIds: Array<number>): Promise<Order> => {  
  const [result] = await connection
    .execute<ResultSetHeader>('INSERT INTO Trybesmith.Orders (userId) VALUES (?)', [userId]);
  
  await productsIds.forEach(async (prodId) => {
    await connection.execute<ResultSetHeader>(`UPDATE Trybesmith.Products
      SET orderId = ? WHERE ?`, [result.insertId, prodId]);
  });

  return { userId, productsIds } as Order;
};
