import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.send("post route from v2");
});

export default router;
