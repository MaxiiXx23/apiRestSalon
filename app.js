import dotenv from 'dotenv';
dotenv.config();
import './src/database/connection';
import express, { urlencoded } from 'express';
import { resolve } from 'path'; 

import userRoutes from './src/routes/userRoutes';

const app = express();

app.use(urlencoded({extended: true}));
app.use(express.json());

app.use(express.static(resolve(__dirname, 'uploads')));

app.use('/users/', userRoutes);

export {app};