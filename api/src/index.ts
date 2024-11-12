import express from 'express';
import userRouter from './routes/users';
import { setupSwagger } from './swagger';

const app = express();
const port = 3000;

// Set up Swagger
setupSwagger(app);

app.use('/api/users', userRouter)

app.listen(port, () => {
    console.log(`Running on port ${port}`);
})