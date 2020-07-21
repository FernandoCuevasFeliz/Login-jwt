/* eslint-disable no-underscore-dangle */
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import helmet from 'helmet';
import passport from 'passport';
import UserModel from '../models/User';

// strategies
import JwtStrategy from './passport/jwt';

const middlewares = (app: express.Application) => {
  app.use(cors());
  app.use(helmet());
  app.use(morgan('dev'));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  // passport
  app.use(passport.initialize());

  // passport strategies
  passport.use(JwtStrategy);

  passport.serializeUser((user: IUser, done) => done(null, user._id));
  passport.deserializeUser(async (id, done) => {
    await UserModel.findById(id, (err, user) => done(null, user));
  });
};

export default middlewares;
