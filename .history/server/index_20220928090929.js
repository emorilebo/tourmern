import express from "express";
const port = 5000;
//Password : CRUXifixur1958
//
const app = express();

app.get("/", (req, res) => {
  res.send("Hello Express");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
