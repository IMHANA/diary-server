import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { Diary, Prisma } from '@prisma/client';
import { DiaryService } from './diary.service';
import { CreateDiaryDto } from './dto/create-diary.dto';
import { UpdateDiaryDto } from './dto/update-diary.dto';

@Controller('diary')
export class DiaryController {
  constructor(private readonly diaryService: DiaryService) {}

  @Get('list')
  getList(): Promise<Diary> {
    return this.diaryService.getList();
  }

  @Post('new_diary')
  addDiary(@Body() body: Prisma.DiaryCreateInput): Promise<number> {
    return this.diaryService.addDiary(body);
  }

  @Patch(':diary_no')
  updateDiary(
    @Param('diary_no') diary_no: number,
    @Body() updateData: UpdateDiaryDto,
  ) {
    return this.diaryService.updateDiary(diary_no, updateData);
  }
}
