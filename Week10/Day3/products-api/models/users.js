import {db} from '../config/db.js'

export const register = (email,password) => {
    return db('signinusers')
    .insert({email,password})
    .returning(['id','email'])
}

export const login = (email) => {
    return db('signinusers')
    .select('id','email','password')
    .where({email})
}