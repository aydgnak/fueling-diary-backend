import * as process from 'process';
import * as dotenv from 'dotenv';

dotenv.config({ path: '.env' });

// Server Port
export const PORT: number = parseInt(process.env.PORT) || 3000;

// MySQL Configuration
export const MYSQL_HOST: string = process.env.MYSQL_HOST;
export const MYSQL_PORT: number = parseInt(process.env.MYSQL_PORT);
export const MYSQL_USERNAME: string = process.env.MYSQL_USERNAME;
export const MYSQL_PASSWORD: string = process.env.MYSQL_PASSWORD;
export const MYSQL_DATABASE: string = process.env.MYSQL_DATABASE;
