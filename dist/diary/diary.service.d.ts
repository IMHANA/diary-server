import { Diary, Prisma } from '.prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class DiaryService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    private diary;
    getList(): Promise<Diary[]>;
    getHash(hash: string): Promise<Diary[]>;
    getDiaryWithYear(year: number): Promise<Diary[]>;
    addDiary(diary: Prisma.DiaryCreateInput): Promise<number>;
    getDiaryWithNo(diary_no: number): Promise<Diary>;
    updateDiary(diary_no: number, updateData: Prisma.DiaryUpdateInput): Promise<Diary>;
    deleteDiary(diary_no: number): Promise<Diary>;
}
