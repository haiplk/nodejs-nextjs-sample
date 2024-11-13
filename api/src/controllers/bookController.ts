import { Request, Response } from 'express-serve-static-core';
import * as bookService from '../services/bookService';


export const createBook = (req: Request, res: Response) => {
    const book = bookService.createBook(req.body);
    res.status(201).json(book);
};

export const getBooks = (req: Request, res: Response) => {
    const books = bookService.getBooks();
    res.json(books);
};

export const getBook = (req: Request, res: Response) => {
    const id = req.params.id;
    const book = bookService.getBook(id);
    res.json(book);
};