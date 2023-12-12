import { Injectable, UnauthorizedException } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { UserService } from '../user/user.service';
import { compareSync } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { PayloadDto } from './dto/payload.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async login(loginDto: LoginDto) {
    const user = await this.userService.findOneByUsername(loginDto.username);
    if (!user || !compareSync(loginDto.password, user.password)) {
      throw new UnauthorizedException('Invalid username or password');
    }

    const payload: PayloadDto = {
      user: {
        uuid: user.uuid,
        username: user.username,
      },
    };

    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
