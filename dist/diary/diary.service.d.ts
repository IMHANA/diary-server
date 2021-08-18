import { diary, Prisma } from '.prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class DiaryService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    private diary;
    getList(): Promise<diary[]>;
    getHash(hash: string): Promise<diary[]>;
    getDiaryWithYear(year: number): Promise<diary[]>;
    getDiaryWithMonth(month: string): Promise<diary[]>;
    getDiaryWithDay(day: string): Promise<diary[]>;
    addDiary(diary: Prisma.diaryCreateInput): Promise<number>;
    getMonthlySticker(year: number): Promise<any>;
    getDiaryWithNo(diary_no: number): Promise<diary>;
    updateDiary(diary_no: number, updateData: Prisma.diaryUpdateInput): Promise<diary>;
    deleteDiary(diary_no: number): Promise<diary>;
}
