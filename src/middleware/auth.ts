// import { CanActivate, ExecutionContext } from '@nestjs/common';
// import HttpError from '../exception/HttpError';
// import { verifyToken } from 'lib/token';
// import getProcessEnv from 'lib/getProcessEnv';

// export default class AuthGuard implements CanActivate {
//   public canActivate(context: ExecutionContext): boolean {
//     // CanActivate를 implements 하였으므로, canActivate 함수를 구현해야 합니다.
//     const request = context.switchToHttp().getRequest();
//     // 클라이언트에서 보낸 request 정보를 읽어옵니다.

//     const { access_token } = request.headers;
//     // 사용자가 헤더에 보낸 access_token key값의 토큰값.

//     if (access_token === undefined) {
//       // 토큰이 전송되지 않았다면
//       throw new HttpError(401, '토큰이 전송되지 않았습니다.');
//     }

//     request.user = this.validateToken(access_token);
//     // request.user 객체에 디코딩된 토큰(유저 정보)을 저장합니다.
//     return true;
//   }

//   public validateToken(token: string): string {
//     try {
//       const verify: string = jwt.verify(
//         token,
//         getProcessEnv('JWT_SECRET'),
//       ) as string;
//       return verify;
//     } catch (error) {
//       switch (error.message) {
//         // 토큰에 대한 오류를 판단합니다.
//         case 'INVALID_TOKEN':
//         case 'TOKEN_IS_ARRAY':
//         case 'NO_USER':
//           throw new HttpError(401, '유효하지 않은 토큰입니다.');

//         case 'EXPIRED_TOKEN':
//           throw new HttpError(410, '토큰이 만료되었습니다.');

//         default:
//           throw new HttpError(500, '서버 오류입니다.');
//       }
//     }
//   }
// }
