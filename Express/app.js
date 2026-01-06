import express from "express";
import students from "./routes/students.js";
const app = express();
const port = 3000;

// app.use("/students", students);

app.get("/", (req, res) => {
  res.send("This is Home");
});

//----------------------- Route Parameters -----------------------//

app.get("/products", (req, res) => {
  res.send(`<h1>Show all products</h1>`);
});

app.get("/products/:id", (req, res) => {
  res.send(`<h1>${req.params.id}</h1>`);
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
