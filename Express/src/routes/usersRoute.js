import express from "express";
import fs from "fs/promises";
const router = express.Router();

const text = await fs.readFile("./src/utils/Data.json", "utf-8");
const users = JSON.parse(text);

router.get("/", (req, res) => {
  res.json({ message: "Show All Users" });
});

router.get("/:id", async (req, res) => {
  const id = Number(req.params.id);
  const user = await users.find((user) => user.id == id);
  res.send(user);
});

router.post("/", async (req, res) => {
  const data = req.body;
  users.push({ id: users.length + 1, ...data });
  await fs.writeFile("./Data.json", JSON.stringify(users), (err, res) => {
    res.json("Successfully Added");
  });
});

router.delete("/users/:id", async (req, res) => {
  const id = Number(req.params.id);
  users = users.filter((user) => user.id !== id);
  await fs.writeFile("./Data.json", JSON.stringify(users), (err) => {
    if (err) {
      return res.status(500).json({ message: "File write failed" });
    }
    res.json({ message: "Successfully Deleted" });
  });
});
export default router;
