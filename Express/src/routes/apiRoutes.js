import express from "express";
const router = express.Router();
import userRouter from "../routes/usersRoute.js";

router.get("/", (req, res) => {
  res.json({ message: "welcome to API route" });
});

router.use("/users", userRouter);

export default router;
