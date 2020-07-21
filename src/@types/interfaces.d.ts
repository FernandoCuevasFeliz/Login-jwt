interface IPayload {
  id: string;
}

// Models
interface IUser extends TMongoDocument {
  firstName: string;
  lastName: string;
  displayName: string;
  userName: string;
  email: string;
  password: string;
  confirmPassword: string;
  role: TRole;
}
