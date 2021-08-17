import { user } from '@prisma/client';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    getUserList(): Promise<user[]>;
    getUser(userId: string): Promise<user>;
    addUser(body: CreateUserDto): Promise<user>;
}
