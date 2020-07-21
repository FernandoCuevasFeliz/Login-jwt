import { check } from 'express-validator';

export const signInValidator = [
  check('firstName').notEmpty().isLength({ min: 3 }),
  check('lastName').notEmpty().isLength({ min: 3 }),
  check('userName').notEmpty().isLength({ min: 4 }),
  check('email').isEmail(),
  check('password').notEmpty().isLength({ min: 6 }),
  check('confirmPassword').notEmpty().isLength({ min: 6 })
];

export const signUpValidator = [
  check('userName').notEmpty().isLength({ min: 4 }),
  check('password').notEmpty().isLength({ min: 6 })
];
