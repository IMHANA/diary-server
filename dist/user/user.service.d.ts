import { User } from '.prisma/client';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class UserService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    private user;
    getUserList(): Promise<User[]>;
    addUser(user: Prisma.UserCreateInput): Promise<number>;
    getUser(user_id: string): Promise<User>;
}
