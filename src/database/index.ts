import { connect, connection } from 'mongoose';
import { MONGO_URI } from '../config';

const connectDB = async () => {
  connect(MONGO_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  });

  connection.once('open', () => {
    console.log(`DB is connected! ${MONGO_URI}`);
  });

  connection.on('error', (error) => {
    console.error(error);
  });
};

export default connectDB;
