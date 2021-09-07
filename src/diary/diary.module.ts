import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { DiaryController } from './diary.controller';
import { DiaryResolver } from './diary.resolver';
import { DiaryService } from './diary.service';

@Module({
  imports: [PrismaModule],
  providers: [DiaryService, DiaryResolver],
  controllers: [DiaryController],
})
export class DiaryModule {}
