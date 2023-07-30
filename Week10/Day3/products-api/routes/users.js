import express from 'express';
import { _register, _login} from '../controllers/users.js';

const urouter = express.Router();

urouter.post('/register', _register);
urouter.post('/login', _login);

export default urouter;