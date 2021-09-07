import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { Author } from './author';

@Resolver((of) => Author)
export class AuthorsResolver {
  @Query((returns) => Author)
  async author(@Args('id', { type: () => Int }) id: number): Promise<Author> {
    return {
      id: 2,
      firstName: '11',
      lastName: '22',
    };
  }
}
