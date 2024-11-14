import { Book } from "@prisma/client";
import prisma from "../libs/prisma";
import { BookRequest } from "../types/bookType";

export const createBook = async (book: BookRequest): Promise<Book> => {
	const created = await prisma.book.create({
		data: {
			author: book.author,
			title: book.title,
			description: book.description
		}
	})

	return created;
};


export const getBooks = async (): Promise<Book[]> => {
	const books = await prisma.book.findMany({
		where: { isDeleted: false },
	});
	return books;
};

export const getBook = async (id: string): Promise<Book | null> => {
	const book = await prisma.book.findUnique({
		where: { id: id, isDeleted: false },
	});

	return book;
};

export const deleteBook = async (id: string): Promise<boolean> => {
	await prisma.book.update({
		where: { id: id },
		data: {
			isDeleted: true
		}
	});

	return true;
};


export const updateBook = async (id: string, update: BookRequest): Promise<Book | null> => {
	const book = await prisma.book.findUnique({
		where: { id: id, isDeleted: false },
	});

	if (!book) {
		return null;
	}

	const updateData: Partial<BookRequest> = {};

	if (update.author) updateData.author = update.author;
	if (update.title) updateData.title = update.title;

	const updatedBook = await prisma.book.update({
		where: { id: id },
		data: updateData,
	});

	return updatedBook;
};
