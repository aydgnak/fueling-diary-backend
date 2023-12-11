import { DataSource, DataSourceOptions } from 'typeorm';
import { MYSQL_DATABASE, MYSQL_HOST, MYSQL_PASSWORD, MYSQL_PORT, MYSQL_USERNAME } from './environment-variables';

export const MysqlDataSourceOptions: DataSourceOptions = {
  type: 'mysql',
  host: MYSQL_HOST,
  port: MYSQL_PORT,
  username: MYSQL_USERNAME,
  password: MYSQL_PASSWORD,
  database: MYSQL_DATABASE,
  synchronize: false,
  entities: ['dist/**/*.entity.js'],
  migrations: ['dist/migrations/*.js'],
};

const MysqlDataSource: DataSource = new DataSource(MysqlDataSourceOptions);

export default MysqlDataSource;
