import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { AuthorsResolver } from './author/author.resolver';
import { DiaryModule } from './diary/diary.module';
import { UserModule } from './user/user.module';
// import { APP_FILTER } from '@nestjs/core';
// import { AuthModule } from './auth/auth.module';
import { PostResolver } from './post/post.resolver';
// import CatchException from './exception/CatchException';

@Module({
  //AuthModule
  imports: [
    UserModule,
    DiaryModule,
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
  ],
  controllers: [],
  providers: [AuthorsResolver, PostResolver],
  // providers: [
  //   {
  //     provide: APP_FILTER,
  //     useClass: CatchException,
  //   },
  // ],
})
export class AppModule {}
