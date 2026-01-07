import express from "express";
import students from "./routes/students.js";
const app = express();
const port = 3000;

// app.use("/students", students);

app.get("/", (req, res) => {
  res.send("This is Home");
});

//----------------------- Route Parameters -----------------------//

// app.get("/products", (req, res) => {
//   res.send(`<h1>Show all products</h1>`);
// });

// app.get("/products/:id", (req, res) => {
//   res.send(`<h1>${req.params.id}</h1>`);
// });

app.get("/profile/:name", (req, res) => {
  const name = req.params.name || "Guest";
  res.send(`Name is ${name}`);
});

// app.all("*", (req, res) => {
//   res.status(404).send("<h1>404! Page Not Found</h1>");
// });

// ------------ Query string-----------------
app.get("/products", (req, res) => {
  const {category, color} = req.query;
  // res.send(`Category is ${req.query.category} & color is ${req.query.color}`);
  res.send(`Category is ${category} & color is ${color}`);
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
