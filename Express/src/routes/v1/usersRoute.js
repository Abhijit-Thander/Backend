import express from "express";
import {
  createUser,
  deleteUserByid,
  getUser,
  getUserById,
} from "../../controllers/userController.js";
const router = express.Router();

router.get("/", getUser);

router.get("/:id", getUserById);

router.post("/", createUser);

router.delete("/users/:id", deleteUserByid);
export default router;
