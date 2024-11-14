import { Book } from "@prisma/client";
import { BookResponse } from "../types/bookType";

export const mapBookToResponse = (model: Book): BookResponse => {
    return {
        id: model.id,
        author: model.author,
        title: model.title ,
        description: model.description,
        createdAt: model.createdAt ,
        createdBy: model.createdBy,
        updatedAt: model.updatedAt,
        updatedBy: model.updatedBy
    };
};

export const mapBooksToResponse = (books: Book[]): BookResponse[] => {
    return books.map(mapBookToResponse);
  };