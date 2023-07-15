import express from 'express';
import { _getAllProfiles, _addProfile, _checkLogin, _getAllLogins, _insertLogin } from "../controllers/profile.js";

const prouter = express.Router();

prouter.get('/profile', _getAllProfiles);
prouter.post('/profile', _addProfile);
prouter.get("/login", _getAllLogins);
prouter.post("/login", _insertLogin);
prouter.post("/login", _checkLogin)


export default prouter;