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
    console.log('user_info: ', user_info);
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
      where: { user_id },
    });
    return user;
  }

  //사용자 추가 -> pipe를 내가 안써서.. vailidate가 의미 없는...중
  async addUser(user: Prisma.userCreateInput): Promise<User> {
    const userId = await this.getUser(user.user_id);
    if (userId) {
      // if (await userId) {
      //promise 객체가 반환되기 때문에 무조건 true가 응답됨.
      const err = { id: '아이디가 중복되었습니다.' };
      throw new HttpException(
        { message: 'Input data validation failed', err },
        HttpStatus.BAD_REQUEST,
      );
    } else {
      return await this.prisma.user.create({
        data: user,
      });
    }
    // const newUser = user;
    // let id = '';
    // id = newUser.user_id;
    // const validate_err = await validate(newUser);
    // if (validate_err.length > 0) {
    //   const err = { id: 'User id is already exist' };
    //   throw new HttpException(
    //     { message: 'Input data validation failed', err },
    //     HttpStatus.BAD_REQUEST,
    //   );
    // } else {
    //   return await this.prisma.user.create({
    //     data: newUser,
    //   });
    // }
  }
}
