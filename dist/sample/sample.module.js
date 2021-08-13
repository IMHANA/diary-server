"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SampleModule = void 0;
const common_1 = require("@nestjs/common");
const sample_service_1 = require("./sample.service");
const sample_controller_1 = require("./sample.controller");
let SampleModule = class SampleModule {
};
SampleModule = __decorate([
    common_1.Module({
        controllers: [sample_controller_1.SampleController],
        providers: [sample_service_1.SampleService]
    })
], SampleModule);
exports.SampleModule = SampleModule;
//# sourceMappingURL=sample.module.js.map