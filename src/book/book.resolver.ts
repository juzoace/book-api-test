/* eslint-disable prettier/prettier */
// book.resolver.ts

import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { BookService } from './book.service'; // Import your book service
import { Book, BookInput } from './book.dto'; // Import the Book GraphQL type

@Resolver(() => Book)
export class BookResolver {
  constructor(private readonly bookService: BookService) {}

  @Query(() => Book, { name: 'getBook' })
  async getBook(@Args('id', { type: () => ID }) id: string): Promise<Book> {
    return this.bookService.findById(id);
  }

  @Query(() => [Book], { name: 'getAllBooks' })
  async getAllBooks(): Promise<Book[]> {
    return this.bookService.findAll();
  }

  @Mutation(() => Book, { name: 'createBook' })
  async createBook(@Args('input') input: BookInput): Promise<Book> {
    return this.bookService.create(input);
  }

  @Mutation(() => Book, { name: 'updateBook' })
  async updateBook(
    @Args('id', { type: () => ID }) id: string,
    @Args('input') input: BookInput
  ): Promise<Book> {
    return this.bookService.update(id, input);
  }

  @Mutation(() => Boolean, { name: 'deleteBook' })
  async deleteBook(@Args('id', { type: () => ID }) id: string): Promise<boolean> {
    return this.bookService.delete(id);
  }
}
