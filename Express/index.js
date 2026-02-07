import express from "express";
import { PORT } from "./src/config/serverConfig.js";
import apiRouter from "./src/routes/apiRoutes.js";
import connectDB from "./src/config/dbConfig.js";

const app = express();

//middleware
app.set("view engine", "ejs");
app.set("views", "./src/views");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", apiRouter);

app.get("/", (req, res) => {
  res.send("<h1>Home Page</h1>");
});

// Defaut route
app.use((req, res) => {
  return res.status(404).json({ message: "page not found" });
});

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
  connectDB();
});
