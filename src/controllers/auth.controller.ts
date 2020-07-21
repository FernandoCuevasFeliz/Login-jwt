import { validationResult } from 'express-validator';
import { BAD_REQUEST, OK, NOT_FOUND } from 'http-status-codes';
import passport from 'passport';

import { ErrorHandler } from '../error/index';
import UserModel from '../models/User';
import { encryptPassword, matchPassword } from '../libs/bcrypt';
import resDataUser from '../helpers/resDataUser';

export const signIn: THandler = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    throw new ErrorHandler(BAD_REQUEST, errors.array());
  }

  const { firstName, lastName, userName, email, password, confirmPassword } = req.body;
  const verifyUser = await UserModel.findOne({ $or: [{ email }, { userName }] });

  if (verifyUser) throw new ErrorHandler(BAD_REQUEST, 'User not availible');

  if (password !== confirmPassword) {
    throw new ErrorHandler(BAD_REQUEST, 'Passwords not match');
  }
  const user = {
    firstName: firstName.toLowerCase(),
    lastName: lastName.toLowerCase(),
    displayName: `${firstName} ${lastName}`.toLowerCase(),
    userName: userName.toLowerCase(),
    email: email.toLowerCase(),
    password: await encryptPassword(password.trim()),
    confirmPassword: await encryptPassword(confirmPassword.trim())
  };
  // save user
  const newUser = new UserModel(user);
  await newUser.save();

  const dataUser = resDataUser(newUser);
  return res.status(OK).json({
    code: OK,
    message: 'User created!',
    dataUser
  });
};

export const signUp: THandler = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) throw new ErrorHandler(BAD_REQUEST, errors.array());

  const { userName, password } = req.body;

  const user = await UserModel.findOne({ $or: [{ userName }, { email: userName }] });

  if (!user) throw new ErrorHandler(NOT_FOUND, 'User no found');
  // eslint-disable-next-line operator-linebreak
  const isPassword =
    matchPassword(password.trim(), user.password) &&
    matchPassword(password.trim(), user.confirmPassword);

  if (!isPassword) throw new ErrorHandler(BAD_REQUEST, 'UserName Or Password Incorrect');

  const dataUser = resDataUser(user);

  return res.status(OK).json({
    code: OK,
    message: 'Ok',
    dataUser
  });
};

export const authenticateUser: THandler = async (req, res, next) => {
  await passport.authenticate('jwt', { session: false }, (err, user) => {
    if (err || user) throw new ErrorHandler(BAD_REQUEST, 'Access Denied');

    req.user = user;
    next();
  })(req, res, next);
};
