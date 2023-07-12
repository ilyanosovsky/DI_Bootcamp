import express from 'express';
import { _getProfile, _getAllProfiles, _addProfile, _updateProfile, _deleteProfile } from "../controllers/profile.js";

const prouter = express.Router();

prouter.get('/', _getAllProfiles);
prouter.get('/:user_id', _getProfile);
prouter.post('/', _addProfile);
prouter.put('/:user_id', _updateProfile);
prouter.delete('/:user_id', _deleteProfile);

export default prouter;