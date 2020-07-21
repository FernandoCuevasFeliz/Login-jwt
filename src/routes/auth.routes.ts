import { Router } from 'express';
import { handlerExceptionRoute } from '../error';

// validators
import * as authValidator from '../middlewares/validators/auth.validator';

// controllers
import * as userCtrl from '../controllers/auth.controller';

const router = Router();

/**
 * @desc SignUp route
 * @rote POST /api/auth/signup
 * @public
 */
router.post(
  '/signin',
  authValidator.signInValidator,
  handlerExceptionRoute(userCtrl.signIn)
);

/**
 * @desc SignIn route
 * @rote POST /api/auth/signin
 * @public
 */
router.post(
  '/signup',
  authValidator.signUpValidator,
  handlerExceptionRoute(userCtrl.signUp)
);

export default router;
