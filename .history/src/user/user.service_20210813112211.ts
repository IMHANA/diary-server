import { User } from '.prisma/client';
import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}
  private user: User[] = [];

  async getUserList(): Promise<User[]> {
    const users = await this.prisma.user.findMany({
      orderBy: { user_id: 'desc' },
    });
    return users;
  }

  async addUser(user: Prisma.UserCreateInput): Promise<number> {
    const createUser = await this.prisma.user.create({
      data: user,
    });
    return createUser.user_id;
  }
}
