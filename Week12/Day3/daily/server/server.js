const express = require('express');
const app = express();
const cors = require("cors");
const bp = require('body-parser');

app.use(cors());
app.use(bp.urlencoded({extended:false}));
app.use(bp.json());

app.get('/api/hello', (req, res) => res.send('Hello from Express'));

app.post('/api/world', (req, res) => {
    console.log(req.body);
    return res.send(`I received your POST request. This is what you sent me: ${req.body.message}`)
});

const PORT = 3030;

app.listen(PORT, () => {
    console.log(`run on port `, PORT);
});