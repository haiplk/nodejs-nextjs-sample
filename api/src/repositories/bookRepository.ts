import { BookModel } from "../models/book"
import { BookRequest } from "../types/bookType";

export const createBook = (book: BookRequest): BookModel => {
  return { title: 'Test title', author: book.author };
};


export const getBooks = (): BookModel[] => {
  return [
    { title: 'Test title' }
  ]
};

export const getBook = (id: string): BookModel => {
  return { title: 'Test title', id: id };
};
