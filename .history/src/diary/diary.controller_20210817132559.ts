import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { diary, Prisma } from '@prisma/client';
import { DiaryService } from './diary.service';
import { CreateDiaryDto } from './dto/create-diary.dto';
import { UpdateDiaryDto } from './dto/update-diary.dto';

interface SearchHasDto {
  hash: string;
}
@Controller('diary')
export class DiaryController {
  constructor(private readonly diaryService: DiaryService) {}

  //일기 전체 조회
  @Get('list')
  getList(): Promise<diary[]> {
    return this.diaryService.getList();
  }

  //일기 해시태그로 조회
  @Get('search_hash')
  getHash(@Body() searchParam: SearchHasDto): Promise<diary[]> {
    return this.diaryService.getHash(searchParam.hash);
  }

  //일기 select로 날짜만 다 가져오기?
  // @Get('diary_year/:year')
  // getDiaryWithYear(@Param('year') year: number): Promise<Diary[]> {
  //   return this.diaryService.getDiaryWithYear(year);
  // }

  //일기 년도별 조회
  @Get('diary_year/:year')
  getDiaryWithYear(@Param('year') year: number): Promise<diary[]> {
    return this.diaryService.getDiaryWithYear(year);
  }

  //일기 월별 조회

  //일기 일별 조회

  //일기 추가
  @Post('new_diary')
  addDiary(@Body() body: Prisma.diaryCreateInput): Promise<number> {
    return this.diaryService.addDiary(body);
  }

  //일기 diary no로 조회
  @Get(':diary_no')
  getDiaryWithNo(@Param('diary_no') diary_no: number) {
    return this.diaryService.getDiaryWithNo(diary_no);
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
  deleteDiary(@Param('diary_no') diary_no: number): Promise<diary> {
    return this.diaryService.deleteDiary(diary_no);
  }
}
