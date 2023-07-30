import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "./routes/routes.js";
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(process.env.PORT, () => console.log("listening on port " + process.env.PORT));
