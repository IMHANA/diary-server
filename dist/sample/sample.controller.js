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
exports.SampleController = void 0;
const common_1 = require("@nestjs/common");
const sample_service_1 = require("./sample.service");
const create_sample_dto_1 = require("./dto/create-sample.dto");
const update_sample_dto_1 = require("./dto/update-sample.dto");
let SampleController = class SampleController {
    constructor(sampleService) {
        this.sampleService = sampleService;
    }
    create(createSampleDto) {
        return this.sampleService.create(createSampleDto);
    }
    findAll() {
        return this.sampleService.findAll();
    }
    findOne(id) {
        return this.sampleService.findOne(+id);
    }
    update(id, updateSampleDto) {
        return this.sampleService.update(+id, updateSampleDto);
    }
    remove(id) {
        return this.sampleService.remove(+id);
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_sample_dto_1.CreateSampleDto]),
    __metadata("design:returntype", void 0)
], SampleController.prototype, "create", null);
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SampleController.prototype, "findAll", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SampleController.prototype, "findOne", null);
__decorate([
    common_1.Patch(':id'),
    __param(0, common_1.Param('id')),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_sample_dto_1.UpdateSampleDto]),
    __metadata("design:returntype", void 0)
], SampleController.prototype, "update", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SampleController.prototype, "remove", null);
SampleController = __decorate([
    common_1.Controller('sample'),
    __metadata("design:paramtypes", [sample_service_1.SampleService])
], SampleController);
exports.SampleController = SampleController;
//# sourceMappingURL=sample.controller.js.map