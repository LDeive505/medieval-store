import { RowDataPacket } from 'mysql2';
import { DetailedOrder } from '../types/Order';
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

export const create = () => {

};