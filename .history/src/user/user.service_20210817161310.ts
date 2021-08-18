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

  //사용자 전체조회
  async getUserList(): Promise<User[]> {
    const users = await this.prisma.user.findMany({
      orderBy: { user_id: 'desc' },
    });
    return users;
  }

  //사용자 id로 조회
  async getUser(user_id: string): Promise<User> {
    const user = await this.prisma.user.findFirst({
      where: { user_id: 'desc' },
    });
    return user;
  }

  //사용자 추가
  async addUser(user: Prisma.userCreateInput): Promise<User> {
    const newUser = user;
    let id = '';
    id = newUser.user_id;
    const validate_err = await validate(newUser);
    if (validate_err.length > 0) {
      const err = { id: 'User id is already exist' };
      throw new HttpException(
        { message: 'Input data validation failed', err },
        HttpStatus.BAD_REQUEST,
      );
    } else {
      return await this.prisma.user.create({
        data: newUser,
      });
    }
  }
}
