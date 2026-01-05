import express from "express";
const router = express.Router();

router.get("/all", (req, res) => {
  res.send("Show all the students");
});

router.post("/create", (req, res) => {
  res.send("create new students");
});

router.delete("/delete", (req, res) => {
  res.send("delete  a students");
});

export default router;
