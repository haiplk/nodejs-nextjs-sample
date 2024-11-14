import { Request, Response } from 'express-serve-static-core';
import * as bookService from '../services/bookService';


export const createBook = async (req: Request, res: Response) => {
    const book = await bookService.createBook(req.body);
    res.status(201).json(book);
};

export const getBooks = async (req: Request, res: Response) => {
    const books = await bookService.getBooks();
    res.json(books);
};

export const updateBook = async (req: Request, res: Response) => {
    const id = req.params.id;
    const book = await bookService.updateBook(id, req.body);
    if (book) {
        res.json(book);
    }
    else {
        res.status(404).json({});
    }
};

export const getBook = async (req: Request, res: Response) => {
    const id = req.params.id;
    const book = await bookService.getBook(id);
    if (book) {
        res.json(book);
    }
    else {
        res.status(404).json({});
    }
};