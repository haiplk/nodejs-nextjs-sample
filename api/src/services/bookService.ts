import { BookRequest, BookResponse } from "../types/bookType";
import * as bookRepository from '../repositories/bookRepository';
import { mapBooksToResponse, mapBookToResponse } from "../mappers/bookMappers";

export const createBook = async (request: BookRequest): Promise<BookResponse> => {
    const book = await bookRepository.createBook(request);
    return mapBookToResponse(book);
};

export const updateBook = async (id: string, request: BookRequest): Promise<BookResponse | null> => {
    const book = await bookRepository.updateBook(id, request);
    if (book) {
        return mapBookToResponse(book);
    }

    return null;
};


export const getBooks = async (): Promise<BookResponse[]> => {
    const books = await bookRepository.getBooks();
    return mapBooksToResponse(books);
};


export const getBook = async (id: string): Promise<BookResponse | null> => {
    const book = await bookRepository.getBook(id);
    if (book) {
        return mapBookToResponse(book);
    }

    return null;
};
