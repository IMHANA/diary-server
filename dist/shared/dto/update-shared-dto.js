"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateSharedDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_shared_dto_1 = require("./create-shared-dto");
class UpdateSharedDto extends mapped_types_1.PartialType(create_shared_dto_1.CreateSharedDto) {
}
exports.UpdateSharedDto = UpdateSharedDto;
//# sourceMappingURL=update-shared-dto.js.map