// import { db } from "../config/db.js";
// import { hash } from "bcrypt";

import  db  from "../config/db.js";

export const login = (username) => {
    return db("login")
      .join("users", { "users.username": "login.username" })
      .select(
        "login.password",
        "login.login_id",
        "login.username",
        "users.user_id",
        "users.first_name",
        "users.last_name",
        "users.email"
      )
      .where({ 'login.username': username });
  };
  

  export const updateLastLogin = (username) => {
    return db("users").update({ last_login: new Date() }).where({ username });
  };

  

export const register = async ({first_name, last_name, username, email, hash}) => {
    const trx = await db.transaction();
    try {
        const user = await db('users') // trx - transanction (stoping autocommit)
        .insert({first_name, last_name, username, email, last_login: new Date()}, ["user_id", "username", "email", "first_name", "last_name"])
        .transacting(trx);
        // .returning(["user_id", "username", "email", "first_name", "last_name"])
        console.log('user =>', user);

        const login = await db('login')
        .insert({
            username: user.username || username, 
            password: hash
        }, ["login_id", "username", "password"])
        .transacting(trx);

        console.log('login => ', login);

        await trx.commit();
        return user;

    } catch (err) {
        console.log("err => ", err);
        await trx.rollback();
        throw new Error(err.message); 
    }
};


// export const register = ({first_name, last_name, username, email, created_date, last_login, hash}) => {
//     db.transaction((trx) => {
//         trx('users')
//         .insert({first_name, last_name, username, email, created_date, last_login})
//         .returning(['user_id', 'username', 'email', 'first_name', 'last_name'])

//         .then(row => {
//             return trx('login')
//             .insert({
//                 username:row[0].username || username,
//                 password: hash
//             })
//             .then((row) => {
//                 trx.commit;
//             })
//             .catch((err) => {
//                 trx.rollback;
//             })
//         })

//         .then((row) => {
//             trx.commit;
//         })
//         .catch((err) => {
//             trx.rollback;
//         });
//     });
// };