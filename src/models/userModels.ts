import { ResultSetHeader } from 'mysql2';
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

export const getAll = async () => {

};