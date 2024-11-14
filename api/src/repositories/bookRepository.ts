import { Book } from "@prisma/client";
import prisma from "../libs/prisma";
import { BookRequest } from "../types/bookType";

export const createBook = (book: BookRequest): Book => {
  throw new Error();
};


export const getBooks = async (): Promise<Book[]> => {
  const books = await prisma.book.findMany();
  return books;
};

export const getBook = (id: string): Book => {
  throw new Error();
};
