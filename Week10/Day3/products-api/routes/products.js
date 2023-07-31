import express from "express";
import { _getAllProducts, _getProduct, _searchProduct, _postProduct, _updateProduct, _deleteProduct, _getAllProductsEJS} from "../controllers/products.js";

import { verifyToken } from "../middlewares/VerifyToken.js";

const prouter = express.Router();

prouter.get('/search', _searchProduct);  //search products
prouter.get('/',verifyToken, _getAllProducts); // get all products
prouter.get('/:id', _getProduct); // get one product by id
prouter.post('/', _postProduct); //post products
prouter.put('/:id', _updateProduct); //update product
prouter.delete('/:id', _deleteProduct); //delete product

prouter.get('/ejs/shop', _getAllProductsEJS); //for EJS

prouter.post('/formdata', (req,res) => {
    console.log('formdata => ', req.body);
    res.json({msg:"OK"});
});

export default prouter; //because we have only one router

//http://localhost:3030/api/products/search?name=ip