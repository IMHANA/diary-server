import { diary, Prisma } from '@prisma/client';
import { DiaryService } from './diary.service';
import { UpdateDiaryDto } from './dto/update-diary.dto';
interface SearchHasDto {
    hash: string;
}
export declare class DiaryController {
    private readonly diaryService;
    constructor(diaryService: DiaryService);
    getList(): Promise<diary[]>;
    getHash(searchParam: SearchHasDto): Promise<diary[]>;
    getDiaryWithYear(year: number): Promise<diary[]>;
    addDiary(body: Prisma.diaryCreateInput): Promise<number>;
    getDiaryWithNo(diary_no: number): Promise<diary>;
    updateDiary(diary_no: number, updateData: UpdateDiaryDto): Promise<diary>;
    deleteDiary(diary_no: number): Promise<diary>;
}
export {};
