import { User } from '.prisma/client';
import { Injectable } from '@nestjs/common';
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
}
