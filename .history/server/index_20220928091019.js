import express from "express";
import 

const port = 5000;
//Password : CRUXifixur1958
//mongodb+srv://emori:<password>@cluster0.ddfpbqr.mongodb.net/?retryWrites=true&w=majority
const app = express();

app.get("/", (req, res) => {
  res.send("Hello Express");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
