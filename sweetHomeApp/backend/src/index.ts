import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';

import propertyRouter from './routers/property.router';
import userRouter from './routers/user.router';

import { databaseConnect } from './configs/database.config';
databaseConnect();

const server = express();
const port = 3000;

server.use(express.json());

server.use(cors({
    credentials: true,
    origin:["http://localhost:4200"]
}));

server.use("/property", propertyRouter);
server.use("/user", userRouter);

server.listen(port, () => {
    console.log(`Servidor rodando na porta http://localhost:${port}`)
});