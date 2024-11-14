import { BookRequest, BookResponse } from "../types/bookType";
import * as bookRepository from '../repositories/bookRepository';
import { mapBooksToResponse, mapBookToResponse } from "../mappers/bookMappers";

export const createBook = (request: BookRequest): BookResponse => {
    const book = bookRepository.createBook(request);
    return mapBookToResponse(book);
};


export const getBooks = async (): Promise<BookResponse[]> => {
    const books = await bookRepository.getBooks();
    return mapBooksToResponse(books);
};


export const getBook = (id: string): BookResponse => {
    const book = bookRepository.getBook(id);
    return mapBookToResponse(book);
};
