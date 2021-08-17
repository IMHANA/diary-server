import { Diary, Prisma } from '@prisma/client';
import { DiaryService } from './diary.service';
import { UpdateDiaryDto } from './dto/update-diary.dto';
interface SearchHasDto {
    hash: string;
}
export declare class DiaryController {
    private readonly diaryService;
    constructor(diaryService: DiaryService);
    getList(): Promise<Diary[]>;
    getHash(searchParam: SearchHasDto): Promise<Diary[]>;
    getDiaryWithYear(year: number): Promise<Diary[]>;
    addDiary(body: Prisma.DiaryCreateInput): Promise<number>;
    getDiaryWithNo(diary_no: number): Promise<Diary>;
    updateDiary(diary_no: number, updateData: UpdateDiaryDto): Promise<Diary>;
    deleteDiary(diary_no: number): Promise<Diary>;
}
export {};
