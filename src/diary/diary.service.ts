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
  async getDiaryWithMonth(month: string, userId: string): Promise<diary[]> {
    const data = await this.prisma.$queryRaw(
      `select *, 
        case sticker 
                      when 1 then 'angry'
                      when 2 then 'good'
                      when 3 then 'sad'
                      when 4 then 'happy'
                      when 5 then 'soso'
                      when 6 then 'tired'
                      when 7 then 'what'
                      else 'nothing'
                  end as sticker
      from diary as D 
      inner join "user" as U 
      on (U.user_no = D.user_no) 
      where to_char(diary_date, 'YYYYMM') = '${month}' 
      and U.user_id = '${userId}'
      order by diary_date asc;`,
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

  //일기 diary_no로 조회
  async getDiaryWithDnum(diary_no: number): Promise<diary> {
    diary_no = +diary_no;
    const diary = await this.prisma.diary.findFirst({
      where: { diary_no },
    });
    return diary;
  }

  //일기 추가
  async addDiary(
    diary: Prisma.diaryCreateInput,
    userId: string,
  ): Promise<number> {
    const user = await this.prisma.user.findFirst({
      where: { user_id: userId },
    });
    console.log('user => ', user);

    console.log(diary);

    const data = await this.prisma.$queryRaw(
      `INSERT INTO diary
      (title_list, user_no, painting, text_field, sticker)
      VALUES('{${diary.title_list}}', ${user.user_no}, '${diary.painting}', '${diary.text_field}', ${diary.sticker})
      RETURNING *
      `,
    );

    // TODO : 생성 안됨 추후 확인 필요
    // const createDiary = await this.prisma.diary.create({
    //   data: {
    //     title_list: diary.title_list,
    //     text_field: diary.text_field,
    //     sticker: diary.sticker,
    //     painting: diary.painting,
    //     user_no: user.user_no,
    //   },
    // });
    return data.diary_no;
  }

  //월별 가장 많이 선택된 스티커 번호 조회
  async getMonthlySticker(year: number, userId: string): Promise<any> {
    console.log(81818181818181818);
    console.log('U_id', userId);
    console.log('Y', year);

    const diary = await this.prisma.$queryRaw(
      `select * from (
        select ds, 
                case sticker 
                    when 1 then 'angry'
                    when 2 then 'good'
                    when 3 then 'sad'
                    when 4 then 'happy'
                    when 5 then 'soso'
                    when 6 then 'tired'
                    when 7 then 'what'
                    else 'nothing'
                end as sticker
        from(
          select row_number() over (partition by ds ORDER BY cnt DESC) as rnk, ds, sticker
          from(
            select to_char(diary_date,'YYYY/MM') as ds, sticker, count(sticker) as cnt
            from (
            	select *
            	from diary D
            	left join "user" as u 
            	on D.user_no = u.user_no
            	where U.user_id = '${userId}'
            ) as diary group by to_char(diary_date,'YYYY/MM'), sticker
          ) as TBL1
        ) as TBL2
        where rnk = 1 and to_char(to_date(ds, 'YYYY/MM'),'YYYY') = '${year}'
      ) as D`,
    );
    console.log('diary =? ', diary);

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
    updateData.sticker = +updateData.sticker;
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
