/* eslint-disable comma-dangle */
// eslint-disable-next-line no-unused-vars
import { Schema, model } from 'mongoose';

const UserSchema: Schema<IUser> = new Schema<IUser>(
  {
    firstName: {
      type: String,
      trim: true,
      required: true
    },

    lastName: {
      type: String,
      trim: true,
      required: true
    },

    displayName: {
      type: String,
      trim: true,
      required: true
    },

    userName: {
      type: String,
      trim: true,
      unique: true,
      required: true
    },

    email: {
      type: String,
      trim: true,
      unique: true,
      required: true
    },

    password: {
      type: String,
      trim: true
    },

    confirmPassword: {
      type: String,
      trim: true
    },

    role: {
      type: String,
      default: 'user'
    }
  },
  {
    timestamps: true
  }
);

// eslint-disable-next-line func-names
UserSchema.methods.toJSON = function (): object {
  const obj = this.toObject();
  delete obj.password;
  delete obj.confirmPassword;

  return obj;
};

const UserModel = model<IUser>('user', UserSchema);

export default UserModel;
