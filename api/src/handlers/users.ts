
import { Request, Response } from "express-serve-static-core"
import { UserDto } from '../models/UserDto';

export function getUsers(request: Request, response: Response) {
    response.send([]);
}

export function getUserById(request: Request, response: Response) {
    const id = request.params.id;
    response.send({
        id: id
    });
}


export function createUser(request: Request, response: Response) {
    response.send(request.body);
}
