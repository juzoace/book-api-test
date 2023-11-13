/* eslint-disable prettier/prettier */
// book.dto.ts

import { Field, ID, ObjectType, InputType } from '@nestjs/graphql';

@ObjectType()
export class Book {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  description: string;
}

@InputType()
export class BookInput {
  @Field()
  name: string;

  @Field()
  description: string;
}
