import app from './app';
import { config } from './config/envConfig';
import { logger } from './config/loggerConfig';
import prisma from './libs/prisma';

const PORT = config.port;

app.listen(PORT, () => {
    logger.info(`Server is running on port ${PORT}`);
});

// Gracefully shut down Prisma client on application shutdown
process.on('SIGTERM', async () => {
    logger.info(`Exit prisma`);
    await prisma.$disconnect();
    process.exit(0);
});
process.on('SIGINT', async () => {
    logger.info(`Exit prisma`);
    await prisma.$disconnect();
    process.exit(0);
});