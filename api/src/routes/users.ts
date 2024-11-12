import { Router } from "express";
import { createUser, getUserById, getUsers } from "../handlers/users";

const userRouter = Router();

userRouter.get('/', getUsers);
userRouter.post('/', createUser);

/// api/users/123
userRouter.get('/:id', getUserById);


export default userRouter;