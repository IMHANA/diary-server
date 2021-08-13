"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateSampleDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_sample_dto_1 = require("./create-sample.dto");
class UpdateSampleDto extends mapped_types_1.PartialType(create_sample_dto_1.CreateSampleDto) {
}
exports.UpdateSampleDto = UpdateSampleDto;
//# sourceMappingURL=update-sample.dto.js.map