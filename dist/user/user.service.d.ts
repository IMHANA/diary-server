import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { User } from './entities/user.entity';
export declare class UserService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    private user;
    getUserList(): Promise<User[]>;
    getUser(user_id: string): Promise<User>;
    addUser(user: Prisma.UserCreateInput): Promise<User>;
}
