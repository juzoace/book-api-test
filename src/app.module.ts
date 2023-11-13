import { Module } from '@nestjs/common';
import { BookModule } from './book/book.module';
import { GraphQLAppModule } from './common/graphql.module'; 

@Module({
  imports: [GraphQLAppModule, BookModule],
})
export class AppModule {}
