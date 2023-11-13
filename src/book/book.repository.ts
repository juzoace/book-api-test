/* eslint-disable prettier/prettier */
// src/books/books.repository.ts
import { EntityRepository, Repository } from 'typeorm';
import { Book } from '../entities/book.entity';

@EntityRepository(Book)
export class BooksRepository extends Repository<Book> {}
