import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { FindOneOptions, Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async findAll() {
    return await this.userRepository.find();
  }

  async findOne(uuid: string) {
    const findOneOptions: FindOneOptions = { where: { uuid } };

    return await this.userRepository.findOne(findOneOptions);
  }

  async create(createUserDto: CreateUserDto) {
    const findOneOptions: FindOneOptions = {
      where: {
        username: createUserDto.username,
      },
    };

    const user = await this.userRepository.findOne(findOneOptions);

    if (user) {
      throw new BadRequestException('User already exists');
    }

    const newUser = this.userRepository.create(createUserDto);

    return await this.userRepository.save(newUser);
  }

  async update(uuid: string, updateUserDto: UpdateUserDto) {
    await this.check(uuid);

    await this.userRepository.update({ uuid }, updateUserDto);

    return await this.findOne(uuid);
  }

  async remove(uuid: string) {
    await this.check(uuid);

    await this.userRepository.delete({ uuid });

    return { deleted: true };
  }

  async check(uuid: string) {
    const user = await this.findOne(uuid);

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user;
  }
}
