import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { DiaryController } from './diary/diary.controller';
import { DiaryService } from './diary/diary.service';
import { SharedController } from './shared/shared.controller';
import { SharedService } from './shared/shared.service';
import { PrismaModule } from './prisma/prisma.module';
import { SampleModule } from './sample/sample.module';

@Module({
  imports: [PrismaModule, SampleModule],
  controllers: [AppController, UserController, DiaryController, SharedController],
  providers: [AppService, UserService, DiaryService, SharedService],
})
export class AppModule {}
