import express, {  } from 'express';

import dotenv from 'dotenv';
import { setupSwagger } from './swagger';
import bookRouters from './routes/bookRoutes';
import { config } from './config/envConfig';
import { errorHandler } from './middlewares/errorHandler';
import { loggerMiddleware } from './middlewares/loggerMiddleware';

dotenv.config();
const app = express();
const port = config.port;

// Set up Swagger
setupSwagger(app);

// Add logging middleware
app.use(loggerMiddleware);

app.use('/api/books', bookRouters)

app.listen(port, () => {
    console.log(`Running on port ${port}`);
})