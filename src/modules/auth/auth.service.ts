import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '@modules/user';
import { compareSync } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { LoginDto, PayloadDto, TokenDto } from './dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async login(loginDto: LoginDto): Promise<TokenDto> {
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

    return <TokenDto>{
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
