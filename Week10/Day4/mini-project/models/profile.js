import {db} from '../config/db.js'

export const getAllProfiles = () => {
    return db('register')
    .select('user_id', 'first_name', 'last_name', 'email', 'password', 'created_date', 'last_login_date')
    .orderBy('user_id')
}

export const getProfile = (profile_id) => {
    return db('register')
    .select('user_id', 'first_name', 'last_name', 'email', 'password', 'created_date', 'last_login_date')
    .where({user_id:profile_id})
}

export const addProfile = ({first_name, last_name, email, password}) => {
    return db('register')
    .insert({first_name, last_name, email, password})
    .returning(['user_id', 'first_name', 'last_name', 'email', 'password', 'created_date', 'last_login_date'])
}

export const updateProfile = ({first_name, last_name, email, password}, user_id) => {
    return db('register')
    .update({first_name, last_name, email, password})
    .where({user_id})
    .returning(['user_id', 'first_name', 'last_name', 'email', 'password', 'created_date', 'last_login_date'])
}

export const deleteProfile = (user_id) => {
    return db('register')
    .where({user_id})
    .del()
    .returning(['user_id', 'first_name', 'last_name', 'email', 'password', 'created_date', 'last_login_date'])
}