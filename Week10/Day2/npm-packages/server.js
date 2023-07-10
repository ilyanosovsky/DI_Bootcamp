// const { log } = require('console');
// const http = require('http');

// const server = http.createServer((request, response) => {
//     console.log('Get the request from client');
//     response.end('hello from server !!!');
// });

// server.listen(3001, () => {
//     console.log('run on 3001');
// })

const express = require('express');
const {products} = require('./config/data.js');

const app = express();

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));

// parse application/json
app.use(express.json());

// console.log(__dirname);
//to send static file
app.use('/', express.static(__dirname + '/public'))

app.get('/about', (req,res) => {
    res.sendFile(__dirname + '/public/about.html')
})



app.listen(3001, () => {
    console.log(`server is listening on port 3001`);
});

//CRUD: Create - Read - Update - Delete
//Create - POST
//Read - GET
//Update - PUT
//Delete - DELETE


//CREATE - POST request to create a product{"name":"iKey", "price":900 }
app.post('/api/products', (req,res) => {
    console.log(req.body);
    products.push(req.body);
    res.json("OK POST");
});


// UPDATE - PUT - update one product - id as params, json as body

app.put('/api/products/:id', (req,res) => {
    const id = req.params.id;
    const index = products.findIndex((item) => item.id == id);
    if(index === -1) {
        return res.status(404).json({msg:"Not found"})
    };
    products[index] = {...products[index], name:req.body.name, price:req.body.price};
    res.json(products);
})


//DELETE - Delete a product - id as params 
app.delete("/api/products/:id", (req,res) => {
    const id = req.params.id;
    const index = products.findIndex((item) => item.id == id);
    if(index === -1) {
        return res.status(404).json({msg:"Not found"})
    };
    products.splice(index,1);
    res.json(products);
})



//GET
app.get('/api/products', (req,res) => {  //what we put after root in url
    res.json(products)
}); 

// GET - to get one product with id
// app.get('/api/products/:id', (req,res) => {
//     console.log(req.params);
//     res.send('OK');
// })

// app.get('/api/products/:product_id', (req,res) => {
//     console.log(req.params);
//     const productid = req.params.product_id;
//     const product = products.find((item) => item.id == productid);  //product - object from array
//     res.json(product);
// })

app.get('/api/products/:product_id', (req,res) => {
    console.log(req.params);
    const productid = req.params.product_id;

    const product = products.find((item) => item.id == productid);  //product - object from array
    if (!product) return res.status(404).json({msg:"Product not Found"}); // condition if not existing ID
    res.json(product);
})




//READ - get SEARCH for the product with query ?name = ip
//POSTMAN - http://localhost:3001/api/search?name=ip
// app.get('/api/search', (req,res) => {
//     console.log(req.query);
//     res.send('OK');
// })

//>> { name: 'ip' }

//POSTMAN - http://localhost:3001/api/search?name=ip&price=300
//>> { name: 'ip', price: '300' }

app.get('/api/search', (req,res) => {
    console.log(req.query);
    const name = req.query.name;
    const filtered = products.filter((item) => {
        return item.name.toLowerCase().includes(name.toLowerCase())
    });
    if(filtered.length === 0) {
        return res.status(404).json({msg:"No product matched your search!!!"});
    }
    res.json(filtered);
})



