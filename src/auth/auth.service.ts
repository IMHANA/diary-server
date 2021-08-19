// import { Injectable } from '@nestjs/common';
// import { UserService } from 'src/user/user.service';

// @Injectable()
// export class AuthService {
//   constructor(private userService: UserService) {}

//   async validateUser(user_id: string, pwd: string): Promise<any> {
//     console.log('=== validateUser ===');
//     console.log('user_id => ', user_id);
//     console.log('pwd => ', pwd);

//     const user = await this.userService.findOne(user_id);
//     console.log(user);
//     if (user && user.pwd === pwd) {
//       const { pwd, user_id, ...rest } = user;
//       return user;
//     }
//     return null;
//   }
// }
