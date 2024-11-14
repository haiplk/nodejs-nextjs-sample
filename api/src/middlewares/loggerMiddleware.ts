import { Request, Response, NextFunction, Application } from 'express-serve-static-core';
import { v4 as uuidv4 } from 'uuid';
import { logger } from '../config/loggerConfig';

export const loggerMiddleware = (req: Request, res: Response, next?: NextFunction) => {
    const requestId = uuidv4(); // Generate unique request ID
    const start = Date.now();   // Track request start time

    // Attach request ID to request and response
    // req.requestId = requestId;
    res.setHeader('X-Request-ID', requestId);
    const prefix = `[${requestId}]: ${req.method} ${req.url}`;

    logger.info(`Incoming request ${prefix}`);

    // Log response after response is sent
    res.on('finish', () => {
        const duration = Date.now() - start;
        logger.info(`Completed request ${prefix} - ${res.statusCode} - ${duration}ms`);
    });

    if (next)
        next();
};

