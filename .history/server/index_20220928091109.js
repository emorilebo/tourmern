import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import morgam from "morgam";


//Password : CRUXifixur1958
//mongodb+srv://emori:<password>@cluster0.ddfpbqr.mongodb.net/?retryWrites=true&w=majority
const app = express();

app.get("/", (req, res) => {
  res.send("Hello Express");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
