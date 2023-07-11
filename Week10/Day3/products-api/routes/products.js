import express from "express";
import { _getAllProducts, _getProduct } from "../controllers/products.js";

const prouter = express.Router();

prouter.get('/', _getAllProducts);
prouter.get('/:id', _getProduct);
// prouter.post('/', _postProduct);

export default prouter; //because we have only one router


//1model
//2controllers
//3router