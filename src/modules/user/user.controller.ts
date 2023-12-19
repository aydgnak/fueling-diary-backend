import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto, UpdateUserDto } from './dto';
import { User } from '@modules/user/entities';
import { Public } from '@modules/auth';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Get(':uuid')
  findOne(@Param('uuid') uuid: string): Promise<User> {
    return this.userService.findOne(uuid);
  }

  @Public()
  @Post()
  create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.userService.create(createUserDto);
  }

  @Patch(':uuid')
  update(@Param('uuid') uuid: string, @Body() updateUserDto: UpdateUserDto): Promise<User> {
    return this.userService.update(uuid, updateUserDto);
  }

  @Delete(':uuid')
  remove(@Param('uuid') uuid: string): Promise<User> {
    return this.userService.remove(uuid);
  }
}
