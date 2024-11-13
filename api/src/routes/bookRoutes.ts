import { Router } from "express";
import { createBook, getBook, getBooks } from "../controllers/bookController";

const bookRouters = Router();

/**
 * @swagger
 * /api/books:
 *   post:
 *     summary: Create a book
 */
bookRouters.post('/', createBook);

/**
 * @swagger
 * /api/books:
 *   get:
 *     summary: Retrieve a list of books
 */
bookRouters.get('/', getBooks);

/**
 * @swagger
 * /api/books/:id:
 *   get:
 *     summary: Retrieve a book
 */
bookRouters.get('/:id', getBook);

export default bookRouters;
