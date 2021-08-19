import { Controller, Get, Post, UseGuards, Request } from '@nestjs/common';
import { AppService } from './app.service';
import { LocalAuthGuard } from './auth/local-auth.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  //로그인을 위한 루트를 제공하고, 유저가 로그인하면 다른 api들을 호출할 수 있게 허용헤준다.
  //로그인 하지 않으면 특정 exception 처리
  // @UseGuards(LocalAuthGuard)
  // @Post('login')
  // login(@Request() req): any {
  //   return req.user;
  // }

  // @Get('protected')
  // getHello(): string {
  //   return this.appService.getHello();
  // }
}
