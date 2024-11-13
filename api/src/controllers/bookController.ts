import { Request, Response } from 'express-serve-static-core';
import * as bookRepository from '../repositories/bookRepository';


export const createBook = (req: Request, res: Response) => {
    const book = bookRepository.createBook(req.body);
    res.status(201).json(book);
};

export const getBooks = (req: Request, res: Response) => {
    throw new Error('Test err');
    const books = bookRepository.getBooks();
    res.json(books);
};