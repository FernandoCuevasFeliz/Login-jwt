/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */
import { Strategy, StrategyOptions, ExtractJwt } from 'passport-jwt';
import UserModel from '../../models/User';
import { JWT_KEY } from '../../config';

const optionsJwt: StrategyOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: JWT_KEY
};

const JwtStrategy: Strategy = new Strategy(
  optionsJwt,
  async (payload: IPayload, done): Promise<void> => {
    try {
      const user = await UserModel.findById(payload.id);
      if (user) return done(null, user);
      return done(null, false);
    } catch (error) {
      console.error(error);
    }
  }
);

export default JwtStrategy;
