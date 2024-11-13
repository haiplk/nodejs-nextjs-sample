import { Request, Response, NextFunction } from 'express-serve-static-core';
import { logger } from '../config/loggerConfig';

export const errorHandler = (err: Error, req: Request, res: Response, next?: NextFunction) => {
    logger.error(`aaa ${req.method} ${req.url} - ${err.message}`);
    res.status(400).json({ error: err.message || 'An error occurred' });
};
