import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from './dtos';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async readAll() {
    return await this.userService.readAll();
  }

  @Get(':id')
  async readOne(@Param('userId') id: number) {
    return await this.userService.readOne(id);
  }

  @Post()
  async createUser(@Body() userDto: CreateUserDto) {
    return await this.userService.create(userDto);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() userDto: UpdateUserDto) {
    return await this.userService.update(id, userDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    console.log(await this.userService.remove(id));
    return await this.userService.remove(id);
  }
}
