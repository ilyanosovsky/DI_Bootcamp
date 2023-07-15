import { getAllProfiles, addProfile, getAllLogins, insertLogin, checkLogin, updateLastLogin } from "../models/profile.js";

import * as p4ssw0rd from 'p4ssw0rd';

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

// ADD User
export const _addProfile = (req, res) => {
    console.log('Controller received post req to add users', req.body)
    //modify password:
    console.log("PASS before modify:", req.body.password);
    const hash = p4ssw0rd.hash(req.body.password);
    console.log("PASS after p4ssw0rd:", hash);
    req.body.password = hash;

    addProfile(req.body)
    .then(data => {
        res.json(data)
    })
    .catch(e => {
        console.log("ERROR CONTROLLER", e, "detail:", e.detail);
        if (e.message.includes('unique constraint "register_email_key"')) {
            console.log("Email duplicate");
            res.status(404).json({ msg: 'Email duplicate' });
        } else {
            res.status(404).json({ msg: e.message });
         } 
    })
}

export const _checkLogin = (req, res) => {
    console.log('Controller received post check login users:', "1-", req.body.email, "2-", req.body.password)
    const userLoginPassword = req.body.password;
    const userLoginEmail = req.body.email;
    let result = '';
    checkLogin(userLoginEmail, userLoginPassword)
    .then(data => {
        console.log("response from db:", data)
        if (data.length === 0 ) {
            console.log(`Email ${userLoginEmail} doesn't exist.`);
            result = `Email ${userLoginEmail} doesn't exist.`;
            res.json({result, login: false});
        } else {
            const dbHashPassword = data[0].password;
            const userRegisterId = data[0].user_id;
            console.log("DB hash password: ", dbHashPassword);
            const checkPassword = p4ssw0rd.check(userLoginPassword, dbHashPassword);
            console.log("p4ssw0rd check password result: ", checkPassword);
            if (checkPassword) {
                console.log(`Check OK, welcome ${userLoginEmail}`);
                result = `Check OK, welcome ${userLoginEmail}`;
                res.json({result, login: true})
                insertLogin({Email: userLoginEmail, password: dbHashPassword})
                .then(data => {
                    console.log("in login added info:",data)
                })
                .catch(e => {
                    console.log("ERROR CONTROLLER", e, "detail:", e.detail);
                })

                updateLastLogin(userRegisterId).then(data => {
                    console.log("update login date info from DB:",data)
                })
                .catch(e => {
                    console.log("error update login date:", e.msg);
                })
            
            } else { 
                console.log(`Password for user ${userLoginEmail} is incorrect.`);
                result = `Password for user ${userLoginEmail} is incorrect.`;
                res.json({result, login: false})
            }
        }
      
    })
    .catch(e => {
        console.log(e);
        res.status(404).json({ msg: e.message }); // or e.message
    })
}

export const _getAllLogins = (req, res) => {
    console.log('Controller received get req for all logins', res)
    getAllLogins()
    .then(data => {
        res.json(data)
    })
    .catch(e => {
        console.log("ERROR CONTROLLER LOGIN:", e.message);
        res.status(404).json({ msg: "not found logins" }); // or e.message
    })
}

// ADD Login
export const _insertLogin = (req, res) => {
    console.log('Controller received post req to add Login', req.body)    
    insertLogin(req.body)
    .then(data => {
        res.json(data)
    })
    .catch(e => {
        console.log("ERROR CONTROLLER", e, "detail:", e.detail);
        res.status(404).json({ msg: e.message });
    })
}