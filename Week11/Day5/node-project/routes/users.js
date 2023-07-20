import express from 'express';
import {_register} from '../controllers/users.js';

const user_router = express.Router();

user_router.post('/register', _register);

export default user_router