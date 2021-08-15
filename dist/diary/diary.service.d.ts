import { Diary, Prisma } from '.prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class DiaryService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    private diary;
    getList(): Promise<Diary[]>;
    getHash(hash: string): Promise<Diary[]>;
    addDiary(diary: Prisma.DiaryCreateInput): Promise<number>;
    updateDiary(diary_no: number, updateData: Prisma.DiaryUpdateInput): Promise<Diary>;
    deleteDiary(diary_no: number): Promise<Diary>;
}
