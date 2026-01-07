import express from "express";
const app = express();
const port = 3000;

app.get("/students", (req, res) => {
  res.json([
    {
      id: 1,
      name: "Abhijit",
      email: "abhijit@example.com",
      role: "student",
    },
    {
      id: 2,
      name: "Rahul",
      email: "rahul@example.com",
      role: "teacher",
    },
  ]);
});

app.listen(port, () => {
  console.log(`Server in listening on port ${port}`);
});
