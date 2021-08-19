import { Module } from '@nestjs/common';
import { DiaryModule } from './diary/diary.module';
import { UserModule } from './user/user.module';
// import { APP_FILTER } from '@nestjs/core';
// import { AuthModule } from './auth/auth.module';
// import CatchException from './exception/CatchException';

@Module({
  //AuthModule
  imports: [UserModule, DiaryModule],
  controllers: [],
  providers: [],
  // providers: [
  //   {
  //     provide: APP_FILTER,
  //     useClass: CatchException,
  //   },
  // ],
})
export class AppModule {}
