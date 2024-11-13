import { IBookModel } from "../interfaces/IBookModels";
import { BookModel } from "../models/book"

export const createBook = (book: IBookModel): BookModel => {
  return { title: 'Test title', author: book.author };
};


export const getBooks = (): BookModel[] => {
  return [
    { title: 'Test title' }
  ]
};
