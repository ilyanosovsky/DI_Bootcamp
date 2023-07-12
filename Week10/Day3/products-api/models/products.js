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

//search database. name = ip
export const searchProduct = (name) => {
    return db('products')
    .select('id', 'name', 'price')
    .whereILike('name', `${name}%`)
}

// {"name":"iBlabla", "price":88}
//create a product - post
export const postProduct = ({name, price}) => {
    return db('products')
    .insert({name, price})
    .returning(['id', 'name', 'price'])
}


//UPDATE
export const updateProduct = ({name,price}, id) => {
    return db('products')
    .update({name, price})
    .where({id})
    .returning(['id', 'name', 'price'])
}

//DELETE
export const deleteProduct = (id) => {
    return db('products')
    .where({id})
    .del()
    .returning(['id', 'name', 'price'])
}