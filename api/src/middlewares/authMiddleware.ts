import { Request, Response, NextFunction } from 'express-serve-static-core';

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    // const token = req.headers.authorization?.split(' ')[1];
    // if (!token) return res.status(401).json({ message: 'Unauthorized' });
    // validate token here...
    next();
};
