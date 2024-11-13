import { BookModel } from "../models/book";
import { BookResponse } from "../types/bookType";

export const mapBookToResponse = (model: BookModel): BookResponse => {
    return {
        id: model.id,
        author: model.author,
        title: model.title
    };
};

export const mapBooksToResponse = (books: BookModel[]): BookResponse[] => {
    return books.map(mapBookToResponse);
  };