import express from 'express';
import userRouter from './routes/users';

const app = express();
const port = 3000;

app.use('/api/users', userRouter)

app.listen(port, () => {
    console.log(`Running on port ${port}`);
})