// import { User } from '.prisma/client';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { validate } from 'class-validator';
import { PrismaService } from 'src/prisma/prisma.service';
import { User } from './entities/user.entity';

export type user = {
  user_no: number;
  user_id: string;
  pwd: string;
};

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}
  private user: User[] = [];
  // private readonly users: user[] = [
  //   {
  //     user_no: 1,
  //     user_id: 'one',
  //     pwd: 'hana',
  //   },
  //   {
  //     user_no: 2,
  //     user_id: 'two',
  //     pwd: 'dul',
  //   },
  //   {
  //     user_no: 3,
  //     user_id: 'three',
  //     pwd: 'sam',
  //   },
  //   {
  //     user_no: 4,
  //     user_id: 'four',
  //     pwd: 'sa',
  //   },
  //   {
  //     user_no: 5,
  //     user_id: 'five',
  //     pwd: 'o',
  //   },
  // ];

  // async findOne(user_id: string): Promise<user | undefined> {
  //   return this.user.find((user) => user.user_id === user_id);
  // }

  async getUserInfo(u_id: string, pwd: string): Promise<user> {
    console.log('u_id: ', u_id, ' pwd: ', pwd);
    const user_info = await this.prisma.user.findFirst({
      where: { user_id: u_id, pwd: pwd },
      select: {
        user_id: true,
        user_no: true,
        pwd: true,
      },
    });
    return user_info;
  }

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
