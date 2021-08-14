import { Diary, Prisma } from '@prisma/client';
import { DiaryService } from './diary.service';
import { UpdateDiaryDto } from './dto/update-diary.dto';
export declare class DiaryController {
    private readonly diaryService;
    constructor(diaryService: DiaryService);
    getList(): Promise<Diary[]>;
    addDiary(body: Prisma.DiaryCreateInput): Promise<number>;
    updateDiary(diary_no: number, updateData: UpdateDiaryDto): Promise<Diary>;
}
