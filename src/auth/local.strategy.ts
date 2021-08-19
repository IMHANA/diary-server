// import { Injectable, UnauthorizedException } from '@nestjs/common';
// import { PassportStrategy } from '@nestjs/passport';
// import { Strategy } from 'passport-local';
// import { AuthService } from './auth.service';

// @Injectable()
// export class LocalStrategy extends PassportStrategy(Strategy) {
//   constructor(private authServe: AuthService) {
//     super({ usernameField: 'user_id', passwordField: 'pwd' }); // config
//   }

//   //여기서 자격을 확인함
//   async validate(user_id: string, pwd: string): Promise<any> {
//     console.log('진입 여기');
//     console.log('user_id => ', user_id);
//     console.log('pwd => ', pwd);

//     const user = await this.authService.validateUser(user_id, pwd);

//     if (!user) {
//       throw new UnauthorizedException();
//     }
//     //예외처리는 nest에서 해준다

//     return user;
//   }
// }
