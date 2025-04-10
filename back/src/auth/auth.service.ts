import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
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

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    private prisma: PrismaService,
  ) {}

  async signIn(email: string, pass: string): Promise<any> {
    const user = await this.usersService.findOneByEmail(email);

    if (!user?.password || !(await bcrypt.compare(pass, user?.password))) {
      throw new UnauthorizedException();
    }
    const payload: JwtPayload = {
      sub: user.id,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
    };

    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  async register(params: registerData) {
    const { email, password, firstName, lastName } = params;
    return this.prisma.user.create({
      data: {
        email,
        password: await bcrypt.hash(password, 10),
        firstName,
        lastName,
      },
    });
  }
}
