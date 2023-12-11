import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private readonly userRepository: Repository<User>) {}

  async findAll() {
    return await this.userRepository.find();
  }

  async findOne(uuid: string) {
    return await this.userRepository.findOne({ where: { uuid } });
  }

  async create(createUserDto: CreateUserDto) {
    const user = await this.userRepository.findOne({ where: { username: createUserDto.username } });
    if (user) {
      return user;
    }

    const newUser = this.userRepository.create(createUserDto);

    return await this.userRepository.save(newUser);
  }

  async update(uuid: string, updateUserDto: UpdateUserDto) {
    const user = await this.check(uuid);

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

  async check(uuid: string) {
    const user = await this.findOne(uuid);

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user;
  }
}
