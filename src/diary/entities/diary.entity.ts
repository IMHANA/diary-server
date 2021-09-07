import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Diary {
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
  @Field()
  sticker: number;
  @Field()
  diary_date: Date;
}
