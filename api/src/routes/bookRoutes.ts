import { createBook, getBook, getBooks } from "../controllers/bookController";
import { requestValidator } from "../middlewares/requestValidator";
import { bookValidationSchema } from "../validators/bookValidator";
import { Router } from "express";

const bookRouters = Router();

/**
 * @swagger
 * /api/books:
 *   post:
 *     summary: Create a book
 */
bookRouters.post('/', requestValidator(bookValidationSchema), createBook);

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