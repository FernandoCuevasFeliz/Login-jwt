/* eslint-disable no-underscore-dangle */
import jwt from 'jsonwebtoken';
import { JWT_EXPIRESIN_TIME, JWT_EXPIRESIN_TIME_MAIL, JWT_KEY } from '../config';

const createToken = (user: IUser, type?: TToken): string => {
  const payload: IPayload = {
    id: user._id
  };
  const expiresIn = type ? JWT_EXPIRESIN_TIME : JWT_EXPIRESIN_TIME_MAIL;

  const token = jwt.sign(payload, JWT_KEY, { expiresIn });
  return token;
};

export default createToken;
