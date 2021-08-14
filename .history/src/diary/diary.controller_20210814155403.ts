import { Body, Controller, Post } from '@nestjs/common';
import { Diary, Prisma } from '@prisma/client';
import { DiaryService } from './diary.service';
import { CreateDiaryDto } from './dto/create-diary.dto';

@Controller('diary')
export class DiaryController {
  constructor(private readonly diaryService: DiaryService) {}

  @Post('new_diary')
  addDiary(@Body() body: Prisma.DiaryCreateDto): Promise<number> {
    return this.diaryService.addDiary(body);
  }
}
