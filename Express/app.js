import express from "express";
import students from "./routes/students.js";
const app = express();
const port = 3000;

app.use("/students", students);

app.get("/", (req, res) => {
  res.send("This is Home");
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
