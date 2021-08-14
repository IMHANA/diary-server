import { Module } from '@nestjs/common';
import { DiaryModule } from './diary/diary.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [UserModule, DiaryModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
