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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const class_validator_1 = require("class-validator");
const prisma_service_1 = require("../prisma/prisma.service");
let UserService = class UserService {
    constructor(prisma) {
        this.prisma = prisma;
        this.user = [];
    }
    async getUserList() {
        const users = await this.prisma.user.findMany({
            orderBy: { user_id: 'desc' },
        });
        return users;
    }
    async getUser(user_id) {
        const user = await this.prisma.user.findFirst({
            where: { user_id: 'desc' },
        });
        return user;
    }
    async addUser(user) {
        const newUser = user;
        let id = '';
        id = newUser.user_id;
        const validate_err = await class_validator_1.validate(newUser);
        if (validate_err.length > 0) {
            const err = { id: 'User id is already exist' };
            throw new common_1.HttpException({ message: 'Input data validation failed', err }, common_1.HttpStatus.BAD_REQUEST);
        }
        else {
            return await this.prisma.user.create({
                data: newUser,
            });
        }
    }
};
UserService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map