import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { hashSync } from 'bcrypt';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private readonly userRepository: Repository<User>) {}

  async findAll() {
    return await this.userRepository.find();
  }

  async findOne(uuid: string) {
    return await this.userRepository.findOne({ where: { uuid } });
  }

  async findOneByUsername(username: string) {
    return await this.userRepository.findOne({ where: { username } });
  }

  async create(createUserDto: CreateUserDto) {
    const user = await this.findOneByUsername(createUserDto.username);
    if (user) {
      return user;
    }

    createUserDto.password = this.hashPassword(createUserDto.password);

    const newUser = this.userRepository.create(createUserDto);

    return await this.userRepository.save(newUser);
  }

  async update(uuid: string, updateUserDto: UpdateUserDto) {
    const user = await this.check(uuid);

    const password = updateUserDto.password;
    if (password) {
      updateUserDto.password = this.hashPassword(password);
    }

    Object.assign(user, updateUserDto);

    return await this.userRepository.save(user);
  }

  async remove(uuid: string) {
    const user = await this.check(uuid);

    await this.userRepository.remove(user);

    return {
      deleted: true,
      user: user,
    };
  }

  private async check(uuid: string) {
    const user = await this.findOne(uuid);

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user;
  }

  private hashPassword(password: string) {
    return hashSync(password, 10);
  }
}
