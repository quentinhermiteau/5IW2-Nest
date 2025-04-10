import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';
export declare class UsersService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(params: {
        page: number;
        limit: number;
    }): Prisma.PrismaPromise<any[]>;
    findOneByEmail(email: string): Prisma.Prisma__UserClient<any, null, import("@prisma/client/runtime/library").DefaultArgs, Prisma.PrismaClientOptions>;
    createUser(data: Prisma.UserCreateInput): Prisma.Prisma__UserClient<any, never, import("@prisma/client/runtime/library").DefaultArgs, Prisma.PrismaClientOptions>;
    updateUser(id: number, data: Prisma.UserCreateInput): Prisma.Prisma__UserClient<any, never, import("@prisma/client/runtime/library").DefaultArgs, Prisma.PrismaClientOptions>;
    deleteUser(id: number): Prisma.Prisma__UserClient<any, never, import("@prisma/client/runtime/library").DefaultArgs, Prisma.PrismaClientOptions>;
}
