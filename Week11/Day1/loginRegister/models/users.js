import { db } from "../config/db.js";
import { hash } from "bcrypt";

export const register = ({first_name, last_name, username, email, created_date, last_login, hash}) => {
    db.transaction((trx) => { //controll the commit
        trx('users')
        .insert({first_name, last_name, username, email, created_date, last_login})
        .returning(['user_id', 'username', 'email', 'first_name', 'last_name'])

        .then(row => {
            return trx('login') //usong transactions avoid conflict with inserting into two tables
            .insert({
                username:row[0].username || username,  //it will be from DB or || from insert
                password: hash
            })
            .then((row) => {
                trx.commit;
            })
            .catch((err) => {
                trx.rollback;
            })
        })

        .then((row) => {
            trx.commit;
        })
        .catch((err) => {
            trx.rollback;
        });
    });
};

// do it the same but with ASYNC and AWAIT