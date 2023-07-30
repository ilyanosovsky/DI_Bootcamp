import { createUser, getUserByUsername } from "../models/users.js";

export const createNewUser = async (req, res) => {
  const { username, password } = req.body;
  console.log(req.body);
  try {
    const existsInDb = await getUserByUsername(username);
    console.log(existsInDb);
    if (!existsInDb) {
      try {
        const newUser = await createUser(req.body);
        console.log(newUser);
        res.status(200).json({ message: "Registered Succesfully! :)" });
      } catch (e) {
        console.log(e);
        res.status(500).json({ error: "Internal server error" });
      }
    } else {
      res.status(400).json({ error: "Username exists" });
    }
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const existsInDb = await getUserByUsername(username);
    if (existsInDb) {
      if (existsInDb.password === password) {
        res.status(200).json({ message: `Login successfully, welcome ${username}` });
      } else {
        res.status(400).json({ error: "Incorrect password , please try again" });
      }
    } else {
      res.status(400).json({ error: "Username does not exist :'(" });
    }
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: "Internal server error" });
  }
};
