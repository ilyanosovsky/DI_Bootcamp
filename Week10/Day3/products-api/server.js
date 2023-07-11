// const express = require ('express');
import express from "express";
import dotenv from 'dotenv';

import prouter from "./routes/products.js"; //without {}


const app = express();
dotenv.config();

app.listen(process.env.PORT, () => {
    console.log(`run on port ${process.env.PORT}`);
});

// app.use(prouter);
app.use('/api/products', prouter);

//.confeg - all the connections
//.models - 
//.controllers - all the logic
//.routes - manage all your routes