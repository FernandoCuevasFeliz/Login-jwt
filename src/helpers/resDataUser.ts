/* eslint-disable no-underscore-dangle */
import capitalLetter from './capitalLetter';
import createToken from '../libs/token';

const resDataUser = (user: IUser): object => {
  const dataUser = {
    firstName: capitalLetter(user.firstName),
    lastName: capitalLetter(user.lastName),
    dispayName: capitalLetter(user.displayName),
    email: user.email,
    token: createToken(user)
  };

  return dataUser;
};

export default resDataUser;
