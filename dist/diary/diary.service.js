"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiaryService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let DiaryService = class DiaryService {
    constructor(prisma) {
        this.prisma = prisma;
        this.diary = [];
    }
    async getList() {
        const diaries = await this.prisma.diary.findMany({
            orderBy: { diary_date: 'desc' },
        });
        return diaries;
    }
    async addDiary(diary) {
        const createDiary = await this.prisma.diary.create({
            data: diary,
        });
        return createDiary.diary_no;
    }
    async updateDiary(diary_no, updateData) {
        diary_no = +diary_no;
        const diary = await this.prisma.diary.update({
            where: { diary_no },
            data: updateData,
        });
        return diary;
    }
    async deleteDiary(diary_no) {
        diary_no = +diary_no;
        const diary = await this.prisma.diary.delete({ where: { diary_no } });
        if (!diary) {
            throw new common_1.NotFoundException(`diary with diary.no ${diary_no} not found.`);
        }
        return diary;
    }
};
DiaryService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], DiaryService);
exports.DiaryService = DiaryService;
//# sourceMappingURL=diary.service.js.map