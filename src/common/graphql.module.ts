/* eslint-disable prettier/prettier */
// graphql.module.ts

import { Module, MiddlewareConsumer, NestModule } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql'; 
import { ApolloDriver } from '@nestjs/apollo'; 
import { AuthenticationMiddleware } from './authentication.middleware'; 
import { BookResolver } from '../book/book.resolver'; 
import { Book } from '../book/book.dto'; 
import { BookService } from 'src/book/book.service';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
      driver: ApolloDriver, 
      context: ({ req }) => ({ req }),
    }),
  ],
  providers: [BookResolver, Book, BookService], 
})
export class GraphQLAppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthenticationMiddleware).forRoutes('*'); 
  }
}
