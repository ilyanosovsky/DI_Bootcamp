// Exercise 3 : Express
// Instructions
// Create a server file, name it - serverExpress.js
// Use express to create a server. Return an HTML line of code (Use only HTML tags, no HTML files), for requests to the root URL (/).
// Remember to use the GET method for the server route.
// Your server should run on http://localhost:3000/


const express = require('express');

const app = express();

app.listen(3000, () => {
    console.log(`server is listening on port 3000`);
});


app.get('/api/lines', (req,res) => {  
    res.send(`<div>
    <h2> This is my first response </h2>
    <h4> This is my second response </h4>
    <h3> This is my third response </h3>
    </div>`);
});
