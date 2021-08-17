import { Diary, Prisma } from '.prisma/client';
import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
// import { Diary } from './entities/diary.entity';

@Injectable()
export class DiaryService {
  constructor(private readonly prisma: PrismaService) {}
  private diary: Diary[] = [];

  //일기 전체 조회
  async getList(): Promise<Diary[]> {
    const diaries = await this.prisma.diary.findMany({
      orderBy: { diary_date: 'desc' },
    });
    return diaries;
  }

  //일기 해시태그로 조회
  async getHash(hash: string): Promise<Diary[]> {
    const diaries = await this.prisma.diary.findMany({
      where: {
        title_list: {
          has: hash,
        },
      },
    });
    return diaries;
  }

  //일기 년도별 조회
  async getDiaryWithYear(year: number): Promise<Diary[]> {
    const data = await this.prisma.diary.findMany({
      where: {
        createAt: {
          gte: new Date('2021-01-01'),
          lt: new Date('2021-12-31'),
        },
      },
    });
    return data;
  }

  //일기 월별 조회

  //일기 일별 조회

  //일기 추가
  async addDiary(diary: Prisma.DiaryCreateInput): Promise<number> {
    const createDiary = await this.prisma.diary.create({
      data: diary,
    });
    return createDiary.diary_no;
  }

  //일기 diary no로 조회
  async getDiaryWithNo(diary_no: number): Promise<Diary> {
    diary_no = +diary_no;
    const diary = await this.prisma.diary.findFirst({
      where: { diary_no },
    });
    return diary;
  }

  //일기 수정
  async updateDiary(
    diary_no: number,
    updateData: Prisma.DiaryUpdateInput,
  ): Promise<Diary> {
    diary_no = +diary_no;
    const diary = await this.prisma.diary.update({
      where: { diary_no },
      data: updateData,
    });
    return diary;
  }

  //일기 삭제
  async deleteDiary(diary_no: number): Promise<Diary> {
    diary_no = +diary_no;
    const diary = await this.prisma.diary.delete({ where: { diary_no } });
    if (!diary) {
      throw new NotFoundException(`diary with diary.no ${diary_no} not found.`);
    }
    return diary;
  }
}