import { Query, ResolveField, Resolver } from '@nestjs/graphql';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Post {
  @Field()
  diary_no: number;
  @Field()
  title_list: string;

  @Field(() => [Comment], { nullable: true })
  comment?: Comment[];
}

@ObjectType()
export class Comment {
  @Field()
  comment_no: number;
  @Field()
  title: string;
}

const posts: Post[] = [
  {
    diary_no: 1,
    title_list: '1111',
  },
  {
    diary_no: 2,
    title_list: '2222',
  },
  {
    diary_no: 3,
    title_list: '3333',
  },
  {
    diary_no: 1,
    title_list: '1111',
  },
  {
    diary_no: 2,
    title_list: '2222',
  },
  {
    diary_no: 3,
    title_list: '3333',
  },
  {
    diary_no: 1,
    title_list: '1111',
  },
  {
    diary_no: 2,
    title_list: '2222',
  },
  {
    diary_no: 3,
    title_list: '3333',
  },
  {
    diary_no: 1,
    title_list: '1111',
  },
  {
    diary_no: 2,
    title_list: '2222',
  },
  {
    diary_no: 3,
    title_list: '3333',
  },
  {
    diary_no: 1,
    title_list: '1111',
  },
  {
    diary_no: 2,
    title_list: '2222',
  },
  {
    diary_no: 3,
    title_list: '3333',
  },
  {
    diary_no: 1,
    title_list: '1111',
  },
  {
    diary_no: 2,
    title_list: '2222',
  },
  {
    diary_no: 3,
    title_list: '3333',
  },
  {
    diary_no: 1,
    title_list: '1111',
  },
  {
    diary_no: 2,
    title_list: '2222',
  },
  {
    diary_no: 3,
    title_list: '3333',
  },
  {
    diary_no: 1,
    title_list: '1111',
  },
  {
    diary_no: 2,
    title_list: '2222',
  },
  {
    diary_no: 3,
    title_list: '3333',
  },
  {
    diary_no: 1,
    title_list: '1111',
  },
  {
    diary_no: 2,
    title_list: '2222',
  },
  {
    diary_no: 3,
    title_list: '3333',
  },
  {
    diary_no: 1,
    title_list: '1111',
  },
  {
    diary_no: 2,
    title_list: '2222',
  },
  {
    diary_no: 3,
    title_list: '3333',
  },
  {
    diary_no: 1,
    title_list: '1111',
  },
  {
    diary_no: 2,
    title_list: '2222',
  },
  {
    diary_no: 3,
    title_list: '3333',
  },
];

const comment: Comment[] = [
  {
    comment_no: 1,
    title: '1111',
  },
  {
    comment_no: 2,
    title: '2222',
  },
  {
    comment_no: 3,
    title: '3333',
  },
];

@Resolver(() => Post)
export class PostResolver {
  @Query(() => [Post])
  async post(): Promise<Post[]> {
    return posts;
  }

  @ResolveField()
  async comment(): Promise<Comment[]> {
    console.log('comment');
    return comment;
  }
}
