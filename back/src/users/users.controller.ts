import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Query,
  Res,
  UseGuards,
} from '@nestjs/common';
import { ApiParam } from '@nestjs/swagger';
import { Response } from 'express';
import { AuthGuard } from 'src/auth/auth.guard';
import { CreateOrUpdateUserDto } from './dto/createOrUpdateUser';
import { FindAllUsersDto } from './dto/usersList';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async findAll(@Query() query: FindAllUsersDto) {
    const users = await this.usersService.findAll(query);

    return users;
  }

  @Get('/:id')
  @ApiParam({ name: 'id' })
  findById(@Param('id') id) {
    console.log(id);

    return 'Find all users';
  }

  @UseGuards(AuthGuard)
  @Post()
  async createUser(@Body() createUser: CreateOrUpdateUserDto) {
    return await this.usersService.createUser(createUser);
  }

  @Put(':id')
  async updateUser(
    @Param('id') id: number,
    @Body() updateUser: CreateOrUpdateUserDto,
  ) {
    return await this.usersService.updateUser(id, updateUser);
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: number, @Res() res: Response) {
    try {
      await this.usersService.deleteUser(id);

      res.status(HttpStatus.NO_CONTENT).send();
    } catch (error) {
      console.error(error);

      res.status(500).json('Something went wrong');
    }
  }
}
