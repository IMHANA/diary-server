"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SampleService = void 0;
const common_1 = require("@nestjs/common");
let SampleService = class SampleService {
    create(createSampleDto) {
        return 'This action adds a new sample';
    }
    findAll() {
        return `This action returns all sample`;
    }
    findOne(id) {
        return `This action returns a #${id} sample`;
    }
    update(id, updateSampleDto) {
        return `This action updates a #${id} sample`;
    }
    remove(id) {
        return `This action removes a #${id} sample`;
    }
};
SampleService = __decorate([
    common_1.Injectable()
], SampleService);
exports.SampleService = SampleService;
//# sourceMappingURL=sample.service.js.map