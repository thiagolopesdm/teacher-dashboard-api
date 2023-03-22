import { DataSource, DataSourceOptions } from 'typeorm';

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  database: 'teacher-dashboard',
  username: 'teacher',
  password: 'teacher',
  entities: ['dist/**/*.entity.js'],
  migrations: ['dist/db/migrations/*.js'],
  logging: 'all',
};

const dataSource = new DataSource(dataSourceOptions);
export default dataSource;
