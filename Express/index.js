import express from "express";
import fs from "fs/promises";
import { PORT } from "./src/config/serverConfig.js";
import usersRouter from "./src/routes/usersRoute.js";
import apiRouter from "./src/routes/apiRoutes.js";

const text = await fs.readFile("./src/utils/Data.json", "utf-8");
let users = JSON.parse(text);

const app = express();

//middleware
app.set("view engine", "ejs");
app.set("views", "./src/views");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/users", usersRouter);
app.use("/api", apiRouter);

app.get("/", (req, res) => {
  res.send("<h1>Home Page</h1>");
});

// Defaut route
app.use((req, res) => {
  return res.status(404).json({ message: "page not found" });
});

app.listen(PORT, () => console.log(`Server is listening on ${PORT}`));
