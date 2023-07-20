import express from "express";
import dotenv from 'dotenv';
import cors from 'cors';

import user_router from "./routes/users.js";

const app = express(); //initialize express
app.use(cors());

//from body parser
app.use(express.urlencoded({extended:true}));
app.use(express.json());

dotenv.config();

app.use('/', user_router);

//listen the server
app.listen(process.env.PORT || 3001, () => {
    console.log(`run on ${process.env.PORT || 3001}`);
})