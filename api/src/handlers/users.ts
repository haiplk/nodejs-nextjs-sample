import { Request, Response } from 'express';
import { UserDto } from '../models/UserDto';

export function getUsers(request: Request, response: Response) {
    response.send([]);
}

export function getUserById(request: Request, response: Response<UserDto>) {
    const id = request.params.id;
    response.send({
        id: id
    });
}


export function createUser(request: Request<{}, {}, UserDto>, response: Response) {
    response.send(request.body);
}
