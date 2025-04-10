import { Response } from 'express';
import { CreateOrUpdateUserDto } from './dto/createOrUpdateUser';
import { FindAllUsersDto } from './dto/usersList';
import { UsersService } from './users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    findAll(query: FindAllUsersDto): unknown;
    findById(id: any): string;
    createUser(createUser: CreateOrUpdateUserDto, req: Request): unknown;
    updateUser(id: number, updateUser: CreateOrUpdateUserDto): unknown;
    deleteUser(id: number, res: Response): any;
}
