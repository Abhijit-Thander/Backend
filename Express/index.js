import express from "express";

const app = express();
const port = 8080;

app.get("/", (req, res) => {
  res.send("Hello World");
});
app.get("/home", (req, res) => {
  res.send("Welcome to home page");
});

app.listen(port, () => console.log(`Server on listening on port:${port}`));
