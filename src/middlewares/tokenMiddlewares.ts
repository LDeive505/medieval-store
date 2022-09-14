import * as jwt from 'jsonwebtoken';

const jwtSecret = process.env.JWT_SECRET || 'theAnswerIs42';

export const tokenGenerator = (id: number, username: string):string => {
  const token = jwt.sign({ id, username }, jwtSecret, { algorithm: 'HS256', expiresIn: '1d' });
  return token;
};

export const tokenValidator = () => { 

};