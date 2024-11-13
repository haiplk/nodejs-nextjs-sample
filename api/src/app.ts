import { Request, Response } from 'express-serve-static-core';
import express from 'express';
import dotenv from 'dotenv';
import { loggerMiddleware } from './middlewares/loggerMiddleware';
import apiRouters from './routes/apiRouters';
import { setupSwagger } from './swagger';
import { errorHandler } from './middlewares/errorHandler';

// Load environment variables from .env file, where API keys and passwords are configured
dotenv.config();

const app = express();

// Middleware
app.use(loggerMiddleware);

// Routes
app.use('/api', apiRouters);  // Prefix all routes with `/api`
setupSwagger(app);

// Health Check Route (useful for monitoring)
app.get('/health', (req: Request, res: Response) => {
  res.status(200).json({ status: 'UP' });
});

// error handler
app.use(errorHandler);

export default app;
