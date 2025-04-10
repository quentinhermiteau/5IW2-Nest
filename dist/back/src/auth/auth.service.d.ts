import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma.service';
import { UsersService } from 'src/users/users.service';
interface registerData {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
}
export interface JwtPayload {
    sub: number;
    email: string;
    firstName: string;
    lastName: string;
}
export declare class AuthService {
    private usersService;
    private jwtService;
    private prisma;
    constructor(usersService: UsersService, jwtService: JwtService, prisma: PrismaService);
    signIn(email: string, pass: string): Promise<any>;
    register(params: registerData): unknown;
}
export {};
