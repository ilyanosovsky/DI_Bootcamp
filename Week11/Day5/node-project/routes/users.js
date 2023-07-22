import express from 'express';
import { _register, _login } from '../controllers/users.js';

const user_router = express.Router();

user_router.post('/register', _register);
user_router.post('/login', _login);

export default user_router