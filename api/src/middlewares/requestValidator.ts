import { Request, Response, NextFunction } from 'express';
import { ObjectSchema } from 'joi';

export const requestValidator = (schema: ObjectSchema) => (req: any, res: any, next: any) => {
    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400).json({ errors: error.message });
    }

    if(next) next(); 
};
