import { User } from '@prisma/client';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    getUserList(): Promise<User[]>;
    addUser(body: CreateUserDto): Promise<number>;
    patch(userId: string): Promise<User>;
}
