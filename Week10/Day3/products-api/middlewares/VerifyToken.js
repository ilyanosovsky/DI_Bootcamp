import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { login } from '../models/users.js';
dotenv.config();

export const verifyToken = (req,res,next) => {
    const accessToken = req.cookies.token || req.headers['x-access-token'];
    // const refreshToken = req.cookies.refreshToken || req.headers['refreshToken'];

    console.log('my token => ', accessToken);

    if(!accessToken) return res.status(401).json({msg:'user unauthorized'});

    jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET, (err,decoded) => {
        if(err) return res.status(403).json({msg: 'verify token faild'});
        const email = decoded.email;
        login(email)
        .then(row => {
            if(row.length > 0) return next();
            return res.status(401).json({msg:'user unauthorized'});
        })
        .catch(e=>{
            return res.status(401).json({msg:'user unauthorized'});
        });

        // next();
    })
};