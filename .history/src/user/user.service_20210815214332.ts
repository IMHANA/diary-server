// import { User } from '.prisma/client';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { validate } from 'class-validator';
import { PrismaService } from 'src/prisma/prisma.service';
import { User } from './entities/user.entity';

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

  async getUser(user_id: string): Promise<User> {
    const user = await this.prisma.user.findFirst({
      where: { user_id },
    });
    return user;
  }

  async addUser(user: Prisma.UserCreateInput): Promise<User> {
    const newUser = user;
    const id = '';
    newUser.user_id = id;
    const validate_err = await validate(newUser);
    if (validate_err.length > 0) {
      const err = { id: 'User id is duplicated' };
      throw new HttpException(
        { message: 'Input data validation failed', err },
        HttpStatus.BAD_REQUEST,
      );
    } else {
      return await this.prisma.user.create({
        data: user,
      });
    }
  //   const createUser = await this.prisma.user.create({
  //     data: user,
  //   });
  //   return createUser.user_no;
  // }
}
