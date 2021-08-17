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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiaryController = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
const diary_service_1 = require("./diary.service");
const update_diary_dto_1 = require("./dto/update-diary.dto");
let DiaryController = class DiaryController {
    constructor(diaryService) {
        this.diaryService = diaryService;
    }
    getList() {
        return this.diaryService.getList();
    }
    getHash(searchParam) {
        return this.diaryService.getHash(searchParam.hash);
    }
    getDiaryWithYear(year) {
        return this.diaryService.getDiaryWithYear(year);
    }
    addDiary(body) {
        return this.diaryService.addDiary(body);
    }
    getDiaryWithNo(diary_no) {
        return this.diaryService.getDiaryWithNo(diary_no);
    }
    updateDiary(diary_no, updateData) {
        return this.diaryService.updateDiary(diary_no, updateData);
    }
    deleteDiary(diary_no) {
        return this.diaryService.deleteDiary(diary_no);
    }
};
__decorate([
    common_1.Get('list'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DiaryController.prototype, "getList", null);
__decorate([
    common_1.Get('search_hash'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DiaryController.prototype, "getHash", null);
__decorate([
    common_1.Get('diary_year/:year'),
    __param(0, common_1.Param('year')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], DiaryController.prototype, "getDiaryWithYear", null);
__decorate([
    common_1.Post('new_diary'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DiaryController.prototype, "addDiary", null);
__decorate([
    common_1.Get(':diary_no'),
    __param(0, common_1.Param('diary_no')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], DiaryController.prototype, "getDiaryWithNo", null);
__decorate([
    common_1.Patch(':diary_no'),
    __param(0, common_1.Param('diary_no')),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_diary_dto_1.UpdateDiaryDto]),
    __metadata("design:returntype", void 0)
], DiaryController.prototype, "updateDiary", null);
__decorate([
    common_1.Delete(':diary_no'),
    __param(0, common_1.Param('diary_no')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], DiaryController.prototype, "deleteDiary", null);
DiaryController = __decorate([
    common_1.Controller('diary'),
    __metadata("design:paramtypes", [diary_service_1.DiaryService])
], DiaryController);
exports.DiaryController = DiaryController;
//# sourceMappingURL=diary.controller.js.map