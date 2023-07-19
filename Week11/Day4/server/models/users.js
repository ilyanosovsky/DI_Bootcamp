import db from "../config/Database.js";

export const createUser = async (user) => {
  const answer = await db("users").insert(user);
  return answer;
};
export const getUserByUsername = async (username) => {
  const answer = await db("users").where("username", username).first();
  return answer;
};
