import { Diary, Prisma } from '.prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

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
}
