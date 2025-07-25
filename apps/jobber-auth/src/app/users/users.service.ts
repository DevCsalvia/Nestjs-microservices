import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma-clients/jobber-auth';
import { PrismaService } from '../prisma/prisma.service';
import { hash } from 'bcryptjs';

@Injectable()
export class UsersService {
  constructor(private readonly prismaService: PrismaService) {}

  async createUser(data: Prisma.UserCreateInput) {
    await this.prismaService.user.deleteMany();
    return this.prismaService.user.create({
      data: {
        ...data,
        password: await hash(data.password, 10),
      },
    });
  }

  getUsers() {
    return this.prismaService.user.findMany();
  }

  getUser(args: Prisma.UserWhereUniqueInput) {
    return this.prismaService.user.findUniqueOrThrow({ where: args });
  }
}
