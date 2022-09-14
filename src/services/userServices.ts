import { User } from '../types/User';
import * as userModels from '../models/userModels';
import { tokenGenerator } from '../middlewares/tokenMiddlewares';

export const createUser = async (user: User):Promise<string> => {
  const { username, level, classe, password } = user;

  if (!username || !level || !password || !classe) {
    throw new Error('Missing parameters');
  }

  const id = await userModels.create(user);
  const token = tokenGenerator(id);
  return token;
};

export const getAllUsers = async () => {

};
