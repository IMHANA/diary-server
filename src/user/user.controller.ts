import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UseGuards,
  Request,
} from '@nestjs/common';
import { user } from '@prisma/client';
import { LocalAuthGuard } from 'src/auth/local-auth.guard';
import { CreateSharedDto } from 'src/shared/dto/create-shared-dto';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // @UseGuards(LocalAuthGuard)
  // @Post('login')
  // login(@Request() req): any {
  //   return req.user;
  // }

  @Post('login')
  getUserInfo(@Body() body: any): Promise<user> {
    const { user_id, pwd } = body;
    return this.userService.getUserInfo(user_id, pwd);
  }

  //사용자 전체조회
  @Get('list')
  getUserList(): Promise<user[]> {
    return this.userService.getUserList();
  }

  //사용자 id로 조회
  @Get(':user_id')
  getUser(@Param('user_id') userId: string): Promise<user> {
    return this.userService.getUser(userId);
  }

  //사용자 추가
  @Post('add')
  addUser(@Body() body: CreateUserDto): Promise<user> {
    return this.userService.addUser(body);
  }
}
