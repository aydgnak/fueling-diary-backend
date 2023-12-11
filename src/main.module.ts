import { ClassSerializerInterceptor, Module, ValidationPipe } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MysqlDataSourceOptions } from '../config/mysql.data-source';
import { UserModule } from './user/user.module';
import { APP_INTERCEPTOR, APP_PIPE } from '@nestjs/core';

@Module({
  imports: [ConfigModule.forRoot({ envFilePath: '.env' }), TypeOrmModule.forRoot(MysqlDataSourceOptions), UserModule],
  controllers: [],
  providers: [
    { provide: APP_INTERCEPTOR, useClass: ClassSerializerInterceptor },
    { provide: APP_PIPE, useValue: new ValidationPipe({ whitelist: true, transform: true }) },
  ],
  exports: [],
})
export class MainModule {}
