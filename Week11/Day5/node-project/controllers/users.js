import { register, login, updateLastLogin } from "../models/users.js";
import bcrypt from "bcrypt";

export const _login = async (req, res) => {
    const { username, password } = req.body;
    try {
      // try to get password with username
      const userinfo = await login(username);
  
      // if username does not exist
      if (userinfo.length === 0)
        return res.status(404).json({ msg: "username not found" });
  
      // check password
      const match = bcrypt.compareSync(password + "", userinfo[0].password);
  
      // if password not match
      if (!match) return res.status(401).json({ msg: "wrong password" });
  
      // update last login time
      await updateLastLogin(username);
  
      // response with user data without the password
      res.status(200).json({ userinfo: { ...userinfo[0], password: "" } });
    } catch (err) {
      console.log(err);
      return res.status(404).json({ msg: "something went wrong" });
    }
  };

export const _register = async (req,res) => {
    const first_name = req.body.fname;
    const last_name = req.body.lname;
    const username = req.body.username;
    const email = req.body.email.toLowerCase();
    const password = req.body.password + "";

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    try {
        const rows = await register({first_name, last_name, username, email, hash});
        res.json(rows);
    } catch (err) {
        console.log(err);
        res.status(404).json({msg : err.message})
    }
}; 