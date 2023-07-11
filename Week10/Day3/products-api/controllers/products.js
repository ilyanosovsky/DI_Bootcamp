import { getAllProducts, getProduct } from "../models/products.js";

//GET - params
export const _getProduct = (req,res) => {
    getProduct(req.params.id)
    .then((data) => {
        res.json(data);
    })
    .catch((e) => {
        console.log(e);
        res.status(404).json({msg: "not found"});
    })
}


//READ - get method to get all products
export const _getAllProducts = (req,res) => {
    getAllProducts()
    .then((data) => {
        res.json(data);
    })
    .catch((e) => {
        console.log(e);
        res.status(404).json({msg: "not found"});
    })
}

