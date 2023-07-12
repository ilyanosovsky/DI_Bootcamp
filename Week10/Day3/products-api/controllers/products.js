import { getAllProducts, getProduct, searchProduct, postProduct, updateProduct, deleteProduct} from "../models/products.js";

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

//SEARCH
export const _searchProduct = (req,res) => {
    searchProduct(req.query.name)
    .then((data) => {
        res.json(data);
    })
    .catch((e) => {
        console.log(e);
        res.status(404).json({msg: "not found"});
    })
}


//CREATE - post method to get all products
export const _postProduct = (req,res) => {
    postProduct(req.body)
    .then((data) => {
        res.json(data);
        // _getAllProducts(data);
    })
    .catch((e) => {
        console.log(e);
        res.status(404).json({msg: "not found"});
    })
}

//UPDATE
export const _updateProduct = (req,res) => {
    updateProduct(req.body, req.params.id)
    .then((data) => {
        res.json(data);
    })
    .catch((e) => {
        console.log(e);
        res.status(404).json({msg: "not found"});
    })
}

//DELETE
export const _deleteProduct = (req,res) => {
    deleteProduct(req.params.id)
    .then((data) => {
        res.json(data);
    })
    .catch((e) => {
        console.log(e);
        res.status(404).json({msg: "not found"});
    })
}