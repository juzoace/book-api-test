// book.service.ts
import { Injectable } from '@nestjs/common';
import { Book, BookInput } from './book.dto'; // Import the Book DTO (GraphQL type)

@Injectable()
export class BookService {
  private books: Book[] = []; // In-memory storage for books

  // Create a new book  -- done
  create(bookInput: BookInput): Book {
    const newBook = { id: `${this.books.length + 1}`, ...bookInput };
    this.books.push(newBook);
    return newBook;
  }

  // Get all books -- done
  findAll(): Book[] {
    console.log('hey get all books');
    console.log(this.books);
    return this.books;
  }

  // Get a book by ID
  findById(id: string): Book | undefined {
    return this.books.find((book) => book.id === id);
  }

  // Update a book by ID
  update(id: string, bookInput: BookInput): Book | undefined {
    console.log('here');
    console.log(this.books);
    const index = this.books.findIndex((book) => book.id === id);
    if (index === -1) {
      console.log('Book not found');
      return undefined; // Book not found
    }
    this.books[index] = { ...this.books[index], ...bookInput };
    return this.books[index];
  }

  // Delete a book by ID
  delete(id: string): boolean {
    const index = this.books.findIndex((book) => book.id === id);
    if (index === -1) {
      return false; // Book not found
    }
    this.books.splice(index, 1);
    return true;
  }
}
