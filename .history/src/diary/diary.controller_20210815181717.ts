import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { Diary, Prisma } from '@prisma/client';
import { DiaryService } from './diary.service';
import { CreateDiaryDto } from './dto/create-diary.dto';
import { UpdateDiaryDto } from './dto/update-diary.dto';

@Controller('diary')
export class DiaryController {
  constructor(private readonly diaryService: DiaryService) {}

  //일기 전체 조회
  @Get('list')
  getList(): Promise<Diary[]> {
    return this.diaryService.getList();
  }

  //일기 추가
  @Post('new_diary')
  addDiary(@Body() body: Prisma.DiaryCreateInput): Promise<number> {
    return this.diaryService.addDiary(body);
  }

  //일기 수정
  @Patch(':diary_no')
  updateDiary(
    @Param('diary_no') diary_no: number,
    @Body() updateData: UpdateDiaryDto,
  ) {
    return this.diaryService.updateDiary(diary_no, updateData);
  }

  //일기 삭제
  @Delete(':diary_no')
  deleteDiary(@Param('diary_no') diary_no: number): Promise<Diary>  {
      return this.diaryService.deleteDiary(diary_no);
    }
  }
}
