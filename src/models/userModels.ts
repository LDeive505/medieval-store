import { ResultSetHeader, RowDataPacket } from 'mysql2';
import connection from './connection';
import { User } from '../types/User';

export const create = async (user: User):Promise<number> => {
  const { username, classe, level, password } = user;
  const [result] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?, ?, ?, ?)',
    [username, classe, level, password],
  );

  return result.insertId;
};

export const getByLogin = async (username: string, password: string): Promise<User> => {
  const [result] = await connection.execute<RowDataPacket[]>(
    'SELECT * FROM Trybesmith.Users WHERE username = ? AND password = ?',
    [username, password],
  );

  return result[0] as User;
};