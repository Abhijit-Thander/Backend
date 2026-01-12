import fs from "fs/promises";
const text = await fs.readFile("./src/utils/Data.json", "utf-8");
const users = JSON.parse(text);

export const getUser = (req, res) => {
  res.json({ users });
};

export const getUserById = async (req, res) => {
  const id = Number(req.params.id);
  const user = await users.find((user) => user.id == id);
  res.send(user);
};

export const createUser = async (req, res) => {
  const data = req.body;
  users.push({ id: users.length + 1, ...data });
  await fs.writeFile("./Data.json", JSON.stringify(users), (err, res) => {
    res.json("Successfully Added");
  });
};

export const deleteUserByid = async (req, res) => {
  const id = Number(req.params.id);
  users = users.filter((user) => user.id !== id);
  await fs.writeFile("./Data.json", JSON.stringify(users), (err) => {
    if (err) {
      return res.status(500).json({ message: "File write failed" });
    }
    res.json({ message: "Successfully Deleted" });
  });
};
