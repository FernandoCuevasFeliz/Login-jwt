/* eslint-disable func-names */
import express from 'express';

import middlewares from './middlewares';
// import handlerErrorMiddleware from './middlewares/error.middleware';

// importing routes
import routes from './routes';

const app: express.Application = express();

// middlewares
middlewares(app);

// routes
app.use('/api', routes);

// middleware output
// app.use(handlerErrorMiddleware);

// route no found
app.use(function (req, res) {
  res.status(404).json({
    statusCode: 404,
    message: 'No Found',
    path: req.url
  });
});

export default app;
