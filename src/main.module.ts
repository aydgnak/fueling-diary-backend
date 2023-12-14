import { ClassSerializerInterceptor, Module, ValidationPipe } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JWT_SECRET, MysqlDataSourceOptions } from '@config/index';
import { APP_GUARD, APP_INTERCEPTOR, APP_PIPE } from '@nestjs/core';
import { JwtModule } from '@nestjs/jwt';
import { AuthModule, AuthGuard } from '@modules/auth';
import { UserModule } from '@modules/user';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env' }),
    TypeOrmModule.forRoot(MysqlDataSourceOptions),
    JwtModule.register({
      global: true,
      secret: JWT_SECRET,
      signOptions: { expiresIn: '1h' },
    }),
    AuthModule,
    UserModule,
  ],
  providers: [
    { provide: APP_INTERCEPTOR, useClass: ClassSerializerInterceptor },
    { provide: APP_PIPE, useValue: new ValidationPipe({ whitelist: true, transform: true }) },
    { provide: APP_GUARD, useClass: AuthGuard },
  ],
  exports: [],
})
export class MainModule {}
