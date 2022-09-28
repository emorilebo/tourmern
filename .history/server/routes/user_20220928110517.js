import express from "express";
const router = express.router();

import { signup } from "../controllers/user.js";

router.post("/signup", signup);

export default router