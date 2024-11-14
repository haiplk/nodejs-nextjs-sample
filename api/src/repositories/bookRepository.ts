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

export const getBook = async (id: string): Promise<Book | null> => {
  const book = await prisma.book.findUnique({
    where: { id: id },
  });

  return book;

};
