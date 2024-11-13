import bookRouters from "./bookRoutes";
import { Router } from "express";

const apiRouters = Router();
apiRouters.use('/books', bookRouters);

export default apiRouters;
