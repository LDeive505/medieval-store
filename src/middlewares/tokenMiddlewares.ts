import * as jwt from 'jsonwebtoken';

const jwtSecret = process.env.JWT_SECRET || 'theAnswerIs42';

export const tokenGenerator = (payload: number):string => {
  const token = jwt.sign({ id: payload }, jwtSecret, { algorithm: 'HS256', expiresIn: '1d' });
  return token;
};

export const tokenValidator = () => { 

};