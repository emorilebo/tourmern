import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import morgan from "morgan";


//Password : CRUXifixur1958
//mongodb+srv://emori:<password>@cluster0.ddfpbqr.mongodb.net/?retryWrites=true&w=majority

const app = express();

app.use(morgan("dev"))

const port = 5000;

app.get("/", (req, res) => {
  res.send("Hello Express");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
