import 'express-async-errors'
import express ,{ Application } from "express";
import { handleErrors } from "./errors";
import adminRoutes from './routers/admin.routes';
import loginRoutes from './routers/login.routes';

const app: Application = express();

app.use(express.json())

app.use('/admin', adminRoutes);
app.use('/login', loginRoutes);

app.use(handleErrors)
export default app