// Instructions
// Use Express to create a few routes:
// The route /aboutMe/:hobby sends the name of one hobby (ie. the value of the route parameter). 
// If the parameter is not a string (ie. numbers or else), set the status to 404.
// The route /pic : displays an HTML file with a picture of your choice.
// The route /form: displays an HTML file.
// Requirements:
// The HTML file must be in the public folder.
// The HTML file must contain a form to contact you.
// The form must contain the inputs email and message. (add some HTML form validations)
// Output:
// You should get the data and display it on the browser at the route /formData.
// For example, “john@gmail.com sent you a message “Love your new website”.

const express = require('express');

const app = express();

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));

// parse application/json
app.use(express.json());

//to send static file
app.use('/', express.static(__dirname + '/public'));


app.listen(3000, () => {
    console.log(`server is listening on port 3000`);
});

// The route /aboutMe/:hobby sends the name of one hobby (ie. the value of the route parameter). 
// If the parameter is not a string (ie. numbers or else), set the status to 404.

app.get('/aboutMe/:hobby', (req,res) => {
    console.log('hello', req.params);
    const hobbyid = req.params["hobby"];
    console.log(hobbyid);
    if(hobbyid.search(/[^A-Za-z\s]/) != -1 ) {
        return res.status(404).json({msg:"Not a string"})
    };
    res.send(hobbyid);
});

// The route /pic : displays an HTML file with a picture of your choice.
app.get('/pic', (req,res) => {
    console.log('hello PIC');
    res.send(`<div><img src="https://media.istockphoto.com/id/1171084311/photo/tennis-rackets-and-balls-leaned-against-the-net.jpg?s=612x612&w=0&k=20&c=SnDgfU30k0PMfVjSHTv4umDQWwKtUHJ8AEgofJXg6w4=" alt="tennis">
    </div>`);
});


// The route /form: displays an HTML file.
app.get('/form', (req,res) => {
    res.sendFile(__dirname + '/public/form.html');
});

app.post('/formData', (req, res) => {
    res.send(`${req.body.email} sent you a message “${req.body.message}"`);
});
