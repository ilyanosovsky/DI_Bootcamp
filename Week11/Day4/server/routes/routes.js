import express from "express";
import { login, createNewUser, test } from "../controllers/usersControllers.js";

const router = express.Router();

router.post("/register", createNewUser);
router.post("/login", login);
router.get('/test', test);

export default router;
