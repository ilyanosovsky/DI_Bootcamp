// all the queries are here

import {db} from '../config/db.js'

export const getAllProducts = () => {
    return db('products')
    .select('id','name','price')
    .orderBy('name')
}

export const getProduct = (product_id) => {
    return db('products')
    .select('id', 'name', 'price')
    .where({id:product_id})
}