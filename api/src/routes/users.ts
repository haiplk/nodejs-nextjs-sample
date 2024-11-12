import { Router } from "express";
import { createUser, getUserById, getUsers } from "../handlers/users";

const userRouter = Router();

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Retrieve a list of users
 *     responses:
 *       200:
 *         description: A list of users.
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
userRouter.get('/', getUsers);

userRouter.post('/', createUser);

/// api/users/123
userRouter.get('/:id', getUserById);


export default userRouter;