import express from "express";
const router = express.router();


import {signup} from "../controllers/user.js"

router.post("/signup", (req, res) => {
    const {email, password} = req.body; // eslint-disable-line no-unused-vars   since   we don't want to exposed this