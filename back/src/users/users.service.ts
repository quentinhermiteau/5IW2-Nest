import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  findAll(params: { page: number; limit: number }) {
    const { page, limit } = params;
    return this.prisma.user.findMany({ skip: limit * (page - 1), take: limit });
  }

  findOneByEmail(email: string) {
    return this.prisma.user.findFirst({
      where: {
        email,
      },
    });
  }

  createUser(data: Prisma.UserCreateInput) {
    return this.prisma.user.create({
      data,
    });
  }

  updateUser(id: number, data: Prisma.UserCreateInput) {
    return this.prisma.user.update({
      data,
      where: {
        id,
      },
    });
  }

  deleteUser(id: number) {
    return this.prisma.user.delete({
      where: {
        id,
      },
    });
  }
}
