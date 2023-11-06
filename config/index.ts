import dotenv from 'dotenv';
dotenv.config();

export const ENV = {
    PORT : Number(process.env.PORT),
    DB_CONNECTION_URI : process.env.DB_CONNECTION_URI,
}

