import express from "express";
import dotenv from 'dotenv';
import prouter from "./routes/profile.js";
import path from 'path'

const __dirname = path.resolve()

const app = express();
dotenv.config();

//to POST user we need body parser
app.use(express.urlencoded({extended:true}))
app.use(express.json())


//static files
app.use('/', express.static(__dirname + '/public'));

app.use('/api', prouter);

app.listen(process.env.PORT, () => {
    console.log(`run on port ${process.env.PORT}`);
});