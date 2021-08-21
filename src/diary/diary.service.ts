import { diary, Prisma } from '.prisma/client';
import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
// import { Diary } from './entities/diary.entity';

@Injectable()
export class DiaryService {
  constructor(private readonly prisma: PrismaService) {}
  private diary: diary[] = [];

  //일기 전체 조회
  async getList(): Promise<diary[]> {
    const diaries = await this.prisma.diary.findMany({
      orderBy: { diary_date: 'desc' },
    });
    return diaries;
  }

  //일기 해시태그로 조회
  async getHash(hash: string): Promise<diary[]> {
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
  // async getDiaryWithYear(year: number): Promise<Diary[]> {
  //   //년도를 어째 떼올지 고민해야할 부분
  //   const data = await this.prisma.diary.findMany({
  //     where: {
  //       diary_date: {
  //         gte: new Date('2021-01-01'),
  //         lt: new Date('2021-07-31'),
  //       },
  //     },
  //   });
  //   return data;
  // }

  //일기 년도별 조회
  async getDiaryWithYear(year: number, userId: string): Promise<diary[]> {
    console.log(year);
    console.log(userId);
    const data = await this.prisma.$queryRaw(
      `select * from "diary" as "D" inner join "user" as "U" on ("U"."user_no" = "D"."user_no") where to_char("diary_date", 'YYYY') = '${year}' and "U"."user_id" = '${userId}';`,
    );
    return data;
  }

  //일기 월별 조회 (202108 형태)
  async getDiaryWithMonth(month: string): Promise<diary[]> {
    const data = await this.prisma.$queryRaw(
      `select * from diary where to_char(diary_date, 'YYYYMM') = '${month}';`,
    );
    return data;
  }

  //일기 일별 조회 (20210817 형태)
  async getDiaryWithDay(day: string): Promise<diary[]> {
    const data = await this.prisma.$queryRaw(
      `select * from diary where to_char(diary_date, 'YYYYMMDD') = '${day}'`,
    );
    return data;
  }

  //일기 추가
  async addDiary(diary: Prisma.diaryCreateInput): Promise<number> {
    const createDiary = await this.prisma.diary.create({
      data: diary,
    });
    return createDiary.diary_no;
  }

  //월별 가장 많이 선택된 스티커 번호 조회
  async getMonthlySticker(year: number): Promise<any> {
    const diary = await this.prisma.$queryRaw(
      `select ds, sticker
      from(
       select row_number () over (partition by ds ORDER BY cnt DESC) as rnk, ds, sticker
       from(
        select to_char(diary_date,'YYYY/MM') as ds, sticker, count(sticker) as cnt
        from diary group by to_char(diary_date,'YYYY/MM'), sticker
       ) as TBL1
      ) as TBL2
      where rnk = 1 and to_char(to_date(ds, 'YYYY/MM'),'YYYY') = '${year}'`,
    );
    return diary;
  }

  //일기 diary no로 조회
  async getDiaryWithNo(diary_no: number): Promise<diary> {
    diary_no = +diary_no;
    const diary = await this.prisma.diary.findFirst({
      where: { diary_no },
    });
    return diary;
  }

  //일기 수정
  async updateDiary(
    diary_no: number,
    updateData: Prisma.diaryUpdateInput,
  ): Promise<diary> {
    diary_no = +diary_no;
    const diary = await this.prisma.diary.update({
      where: { diary_no },
      data: updateData,
    });
    return diary;
  }

  //일기 삭제
  async deleteDiary(diary_no: number): Promise<diary> {
    diary_no = +diary_no;
    const diary = await this.prisma.diary.delete({ where: { diary_no } });
    if (!diary) {
      throw new NotFoundException(`diary with diary.no ${diary_no} not found.`);
    }
    return diary;
  }
}
