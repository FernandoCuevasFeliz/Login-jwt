const ENV: NodeJS.ProcessEnv = process.env;

export const PORT = ENV.PORT || 3000;
export const MONGO_URI = ENV.MONGO_URI || 'mongodb://localhost/db_login_jwt';
export const JWT_KEY = ENV.JWT_KEY || 'secretKey';
export const JWT_EXPIRESIN_TIME = ENV.JWT_EXPIRESIN_TIME || '1h';
export const JWT_EXPIRESIN_TIME_MAIL = ENV.JWT_EXPIRESIN_TIME || '1h';
