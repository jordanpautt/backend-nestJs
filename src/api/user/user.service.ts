import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto, UpdateUserDto } from './dtos';
import { User } from './user.entity';
import { UpdateResult, DeleteResult } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async readAll(): Promise<User[]> {
    return await this.usersRepository.find();
  }

  async readOne(userId: number): Promise<User> {
    return await this.usersRepository.findOne(userId);
  }

  async create(userDto: CreateUserDto): Promise<User> {
    return await this.usersRepository.save(userDto);
  }

  async update(id: number, userDto: UpdateUserDto) {
    return 'ok';
  }

  async remove(userId: number): Promise<DeleteResult> {
    return await this.usersRepository.delete(userId);
  }
}
