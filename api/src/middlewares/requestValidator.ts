import { Request, Response, NextFunction } from 'express-serve-static-core';
import { ObjectSchema } from 'joi';

export const requestValidator = (schema: ObjectSchema) => (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400).json({ errors: error.details });
    }
    next();
};
