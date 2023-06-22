import cors from 'cors';
import 'express-async-errors'
import express ,{ Application } from "express";
import { handleErrors } from "./errors";
import adminRoutes from './routers/admin.routes';
import loginRoutes from './routers/login.routes';
import clientRoutes from './routers/client.routes';
import deviceRoutes from './routers/device.routes';

const app: Application = express();

app.use(express.json())
app.use(cors());

app.use('/admin', adminRoutes);
app.use('/login', loginRoutes);
app.use('/client', clientRoutes);
app.use('/device', deviceRoutes);

app.use(handleErrors)
export default app