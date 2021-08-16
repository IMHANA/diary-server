import { Diary, Prisma } from '.prisma/client';
import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
// import { Diary } from './entities/diary.entity';

@Injectable()
export class DiaryService {
  constructor(private readonly prisma: PrismaService) {}
  private diary: Diary[] = [];

  async getList(): Promise<Diary[]> {
    const diaries = await this.prisma.diary.findMany({
      orderBy: { diary_date: 'desc' },
    });
    return diaries;
  }

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

  async addDiary(diary: Prisma.DiaryCreateInput): Promise<number> {
    const createDiary = await this.prisma.diary.create({
      data: diary,
    });
    return createDiary.diary_no;
  }

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

  async deleteDiary(diary_no: number): Promise<Diary> {
    diary_no = +diary_no;
    const diary = await this.prisma.diary.delete({ where: { diary_no } });
    if (!diary) {
      throw new NotFoundException(`diary with diary.no ${diary_no} not found.`);
    }
    return diary;
  }
}
