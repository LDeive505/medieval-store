import { User } from '../types/User';
import * as userModels from '../models/userModels';
import { tokenGenerator } from '../middlewares/tokenMiddlewares';

export const createUser = async (user: User):Promise<string> => {
  const { username, level, classe, password } = user;

  if (!username || !level || !password || !classe) {
    throw new Error('Missing parameters');
  }

  const id = await userModels.create(user);
  const token = tokenGenerator(id, username);
  return token;
};

export const login = async (username: string, password: string):Promise<string> => {
  const user = await userModels.getByLogin(username, password);
  if (user && user.id) {
    const token = tokenGenerator(user.id, user.username);
    return token;
  }
  return 'Username or password invalid';
};

export const getAllUsers = async () => {

};
