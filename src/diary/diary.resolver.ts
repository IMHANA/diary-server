import { Post, Req } from '@nestjs/common';
import {
  Args,
  ArgsType,
  Field,
  Int,
  Mutation,
  Query,
  Resolver,
} from '@nestjs/graphql';
import { request } from 'express';
import { DiaryService } from './diary.service';
import { Diary } from './entities/diary.entity';

@ArgsType()
export class DiaryArgs {
  @Field()
  date: string;
  @Field()
  tag: string;
}

@ArgsType()
export class DiaryCreateArgs {
  @Field()
  diary_no: number;
  @Field(() => [String])
  title_list: string[];
  @Field()
  user_no: number;
  @Field()
  painting: string;
  @Field()
  text_field: string;
  @Field({ nullable: true })
  sticker: number;
  @Field()
  diary_date: Date;
}

@Resolver((of) => Diary)
export class DiaryResolver {
  constructor(private readonly diaryService: DiaryService) {}

  //전체조회
  // @Query((returns) => [Diary])
  // async diary(@Args('id', { type: () => Int }) id: number): Promise<Diary[]> {
  //   return this.diaryService.getList();
  // }

  @Query(() => [Diary])
  async diary(): Promise<Diary[]> {
    return this.diaryService.getList();
  }

  //해시태그로 조회
  @Query(() => [Diary])
  async diaryWithHash(@Args() arg: DiaryArgs): Promise<Diary[]> {
    // const { user_no: userNo } = request.cookies;
    return this.diaryService.getHash(arg.tag, '1', arg.date);
  }

  //일기 수정
  @Mutation((returns) => Diary)
  async diaryPost(@Args() arg: DiaryCreateArgs) {
    return this.diaryService.updateDiary(arg.diary_no, arg);
  }
}
