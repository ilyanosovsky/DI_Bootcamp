import express from "express";
import dotenv from 'dotenv';
import prouter from "./routes/profile.js";
import path from 'path'


const app = express();
dotenv.config();

//for static
const __dirname = path.resolve()


//to POST user we need body parser
app.use(express.urlencoded({extended:true}))
app.use(express.json())


//static files
app.use('/', express.static(__dirname + '/public'));


app.listen(process.env.PORT, () => {
    console.log(`run on port ${process.env.PORT}`);
});

app.use('/api/profile', prouter);