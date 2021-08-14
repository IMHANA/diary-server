import { Module } from '@nestjs/common';
import { DiaryController } from './diary/diary.controller';
import { DiaryService } from './diary/diary.service';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';
import { UserService } from './user/user.service';

@Module({
  imports: [UserModule],
  controllers: [UserController, DiaryController],
  providers: [UserService, DiaryService],
})
export class AppModule {}
