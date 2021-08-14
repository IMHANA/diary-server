import { Diary, Prisma } from '.prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Diary } from './entities/diary.entity';

@Injectable()
export class DiaryService {
  constructor(private readonly prisma: PrismaService) {}
  private diary: Diary[] = [];

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
    const diary = await this.prisma.diary.update()({
      where: { diary_no },
      data: updateData,
    });
    return diary;
  }
}
