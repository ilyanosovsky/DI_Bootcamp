// const express = require ('express');
import express from "express";
import dotenv from 'dotenv';
import prouter from "./routes/products.js"; //without {}
// path include for STATIC
import path from 'path';
import cors from 'cors';


// ----
import ejs from "ejs";
// ----


const app = express();
dotenv.config();

// ---
app.set('view engine', 'ejs');
// ----

//for static
const __dirname = path.resolve()


//to POST product we need body parser
// sudo npm i body-parser
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use(cors());


//static files
app.use('/', express.static(__dirname + '/public'));


app.listen(process.env.PORT, () => {
    console.log(`run on port ${process.env.PORT}`);
});

// app.use(prouter);
app.use('/api/products', prouter);

//.confeg - all the connections
//.models - 
//.controllers - all the logic
//.routes - manage all your routes

// 1.Search - query
// 2. Create - post
// 3. Update - put 
// 4. Delete - delete 