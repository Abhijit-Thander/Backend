import express from "express";
import dotenv from "dotenv";
import fs from "fs/promises";

const text = await fs.readFile("./Data.json", "utf-8");
let users = JSON.parse(text);
dotenv.config();

const app = express();
const PORT = process.env.PORT;

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/api/users", (req, res) => res.json(users));

app.get("/api/users/:id", async (req, res) => {
  const id = Number(req.params.id);
  const user = await users.find((user) => user.id == id);
  res.send(user);
});

app.post("/api/users", async (req, res) => {
  const data = req.body;
  users.push({ id: users.length + 1, ...data });
  await fs.writeFile("./Data.json", JSON.stringify(users), (err, res) => {
    req.json("Successfully Added");
  });
});

app.patch("/api/users/:id", async (req, res) => {
  // TODO: update a  user
});

app.delete("/api/users/:id", async (req, res) => {
  const id = Number(req.params.id);
  users = users.filter((user) => user.id !== id);
  await fs.writeFile("./Data.json", JSON.stringify(users), (err) => {
    if (err) {
      return res.status(500).json({ message: "File write failed" });
    }
    res.json({ message: "Successfully Deleted" });
  });
});

app.listen(PORT, () => console.log(`Server is listening on ${PORT}`));
