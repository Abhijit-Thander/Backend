import express from "express";

const app = express();
const port = 8080;

// app.get("/", (req, res) => {
//   res.send("This is home page");
// });
// app.get("/products", (req, res) => {
//   res.send("Show all products");
// });
// app.post("/products", (req, res) => {
//   res.send("Create a new product");
// });
// app.put("/products", (req, res) => {
//   res.send("Update a  product");
// });

// app.delete("/products", (req, res) => {
//   res.send("Delete a  product");
// });

app
  .route("/products")
  .get((req, res) => res.send("Show all products"))
  .post((req, res) => res.send("Create a new product"))
  .put((req, res) => res.send("Update a  product"))
  .delete((req, res) => res.send("Delete a  product"));

app.listen(port, () => console.log(`Server on listening on port:${port}`));
