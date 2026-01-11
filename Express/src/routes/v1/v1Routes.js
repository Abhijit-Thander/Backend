import express from "express";
const router = express.Router();
import userRoutes from "../v1/usersRoute.js";
import postRoutes from "../v1/postsRoute.js";

router.use("/users", userRoutes);
router.use("/posts", postRoutes);

export default router;
