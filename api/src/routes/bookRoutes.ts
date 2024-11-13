import { Router } from "express";
import { authMiddleware } from "../middlewares/authMiddleware";
import { requestValidator } from "../middlewares/requestValidator";
import { bookValidationSchema } from "../validators/bookValidator";
import { createBook, getBooks } from "../controllers/bookController";

const bookRouters = Router();

/**
 * @swagger
 * /books:
 *   post:
 *     summary: Create a book
 *     responses:
 *       200:
 *         description: .
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 1
 *                   name:
 *                     type: string
 *                     example: "John Doe"
 */
bookRouters.post('/', createBook);

/**
 * @swagger
 * /books:
 *   get:
 *     summary: Retrieve a list of books
 *     responses:
 *       200:
 *         description: A list of books.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 1
 *                   name:
 *                     type: string
 *                     example: "John Doe"
 */
bookRouters.get('/', getBooks);

export default bookRouters;
