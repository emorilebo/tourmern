import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import morgan from "morgan";


//Password : CRUXifixur1958
//mongodb+srv://emori:<password>@cluster0.ddfpbqr.mongodb.net/?retryWrites=true&w=majority

const app = express();

app.use(morgan("dev"));
app.use(express.json({limit: "30mb", extended: true}))
app.use(express.urlencoded({limit: "30mb", extended: true}))

const MONGODB_URL = "mongodb+srv://emori:CRUXifixur1958@cluster0.ddfpbqr.mongodb.net/?retryWrites=true&w=majority"

const port = 5000;

mongoose(MONGODB_URL).then(()=>{
    app.listen(port, ()=>{
        console.log(`Server running on port ${port}`)
    })
}).catch(error=>console.log(`${error} did not connect`))
