import {db} from '../config/db.js'

export const getAllProfiles = () => {
    return db('register')
    .select('user_id', 'first_name', 'last_name', 'email', 'password', 'created_date', 'last_login_date')
    .orderBy('user_id')
}

export const addProfile = ({first_name, last_name, email, password}) => {
    return db('register')
    .insert({first_name, last_name, email, password})
    .returning(['user_id', 'first_name', 'last_name', 'email', 'password', 'created_date', 'last_login_date'])
}

 export const checkLogin = (email, password) => {
    console.log("Models recive object to search: ", email, "and pasww", password)
    return db('register')
    .select('user_id', 'email', 'password')
    .where({email: email}) 
 }

export const updateLastLogin = (user_id) => {
    let date_time = new Date();
    return db('register')
    .update({last_login_date: date_time})
    .where({user_id})
    .returning(['user_id','email','last_login_date'])
 }

 export const getAllLogins = () => {
    console.log('Received get req for all users');
    return db('login')
    .select('login_id', 'email', 'password')
    .orderBy('login_id')
}

export const insertLogin = ({email, password}) => {
    console.log("Models info login to insert:", {email, password})
    return db('login')
    .insert({email, password})
    .returning(['login_id', 'email', 'password'])
 }