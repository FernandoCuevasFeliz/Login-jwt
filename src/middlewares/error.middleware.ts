import { handlerError } from '../error/index';

const handlerErrorMiddleware = (
  err: any,
  _req: TRequest,
  res: TResponse,
  // eslint-disable-next-line no-unused-vars
  _next: TNext
) => {
  handlerError(err, res);
};

export default handlerErrorMiddleware;
