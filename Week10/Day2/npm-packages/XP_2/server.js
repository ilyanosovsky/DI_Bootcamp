// Exercise 1 : Express & JSON
// Instructions
// Create a public folder containing two files : index.html and script.js
// Outside of the public folder, create a file named server.js.
// In the server.js file, create an express server. Create a GET request to the route /users.
// The handler function of the /users route should send a stringified version of this javascript object const user = {firstname: 'John',lastname: 'Doe'}.
// In the script.js file, fetch the server at the route /users and get the response.
// The response should be the JSON Object. Console.log this object and display it on the DOM.

const express = require('express');

const app = express();

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));

// parse application/json
app.use(express.json());

//to send static file
app.use('/', express.static(__dirname + '/public'))

const user = {
    firstname: 'John',
    lastname: 'Doe'
};

app.listen(3000, () => {
    console.log(`server is listening on port 3000`);
    console.log(user);
});

app.get('/users', (req,res) => {  
    // const userJ = JSON.stringify(user);
    // res.send(userJ);
    res.json(user);
});

// Exercise 2 : Express & Parameters
// Instructions
// In the server.js file, create your server using express.
// Create a route /, and use a GET request method.
// The path of the route should contain the route parameter id.
// The handler function of the route should respond with the value of the route parameter. Check out req.params.
// Run on port http://localhost:3000/ and add an id, for example http://localhost:3000/1234
// The response should be the JSON Object. Console.log this object and display it on the DOM.

app.get('/:id', (req,res) => {
    console.log(req.params);
    const userid = req.params.id;
    console.log(userid);
    res.json(req.params);
});

// Exercise 3: Express & Static Files
// Instructions
// Create a public folder, that contains an HTML file. This HTML file can contain some CSS and some JavaScript 
// (for example a head tag with some classes for styling, and in the body a button with an onClick 
//     attribute calling a Javascript function with an alert).
// In a server.js file create your server using express.
// Your server on http://localhost:3000/ should serve the HTML file. Check out the lesson 
// named Express Routes & Queries in the Course Notes, more specifically the part 
// “How To Serve Static Files In Express”



