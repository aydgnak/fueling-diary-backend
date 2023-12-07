import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MysqlDataSourceOptions } from '../config/mysql.data-source';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env' }),
    TypeOrmModule.forRoot(MysqlDataSourceOptions),
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class MainModule {}
