import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MysqlDataSourceOptions } from '../config/mysql.data-source';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env' }),
    TypeOrmModule.forRoot(MysqlDataSourceOptions),
    UserModule,
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class MainModule {}
