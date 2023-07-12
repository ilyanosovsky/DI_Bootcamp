import { getProfile, getAllProfiles, addProfile, updateProfile, deleteProfile } from "../models/profile.js";

export const _getProfile = (req,res) => {
    getProfile(req.params.user_id)
    .then((data) => {
        res.json(data);
    })
    .catch((e) => {
        console.log(e);
        res.status(404).json({msg: "not found"});        
    })
}

export const _getAllProfiles = (req,res) => {
    getAllProfiles()
    .then((data) => {
        res.json(data);
    })
    .catch((e) => {
        console.log(e);
        res.status(404).json({msg: "not found"});        
    })
}

export const _addProfile = (req,res) => {
    addProfile(req.body)
    .then((data) => {
        res.json(data);
    })
    .catch((e) => {
        console.log(e);
        res.status(404).json({msg: "not found"});        
    })
}

export const _updateProfile = (req,res) => {
    updateProfile(req.body, req.params.user_id)
    .then((data) => {
        res.json(data);
    })
    .catch((e) => {
        console.log(e);
        res.status(404).json({msg: "not found"});        
    })
}

export const _deleteProfile = (req,res) => {
    deleteProfile(req.params.user_id)
    .then((data) => {
        res.json(data);
    })
    .catch((e) => {
        console.log(e);
        res.status(404).json({msg: "not found"});        
    })
}