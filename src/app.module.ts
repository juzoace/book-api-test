import { Module } from '@nestjs/common';
import { BookModule } from './book/book.module';
import { GraphQLAppModule } from './common/graphql.module'; 
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [GraphQLAppModule, BookModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
