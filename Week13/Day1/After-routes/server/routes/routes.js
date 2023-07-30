import express from "express";
import { login, createNewUser } from "../controllers/usersControllers.js";

const router = express.Router();

router.post("/register", createNewUser);
router.post("/login", login);

export default router;
