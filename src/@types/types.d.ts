/* eslint-disable no-unused-vars */
type TMongoDocument = import('mongoose').Document;

type TResponse = import('express').Response;

type TRequest = import('express').Request;

type TNext = import('express').NextFunction;

type TRole = 'user' | 'user-admin' | 'user-root';

type TToken = 'mail';

type THandler = (
  req: TRequest,
  res: TResponse,
  next: TNext
) => Promise<TResponse | void> | TResponse | void;

// Declarations
declare namespace Express {
  export interface Request {
    user: IUser;
  }
}
