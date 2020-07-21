/* eslint-disable import/first */
import { config } from 'dotenv';

config();

import app from './app';
import connectDB from './database';

import { PORT } from './config';

async function main() {
  app.listen(PORT);
  console.log(`Server on port ${PORT}`);
  await connectDB();
}

main();
