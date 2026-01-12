import express from "express";
import {
  createUser,
  deleteUserByid,
  getUser,
  getUserById,
} from "../../controllers/userController.js";
import { validate } from "../../validator/jodValidator.js";
import { userZodSchema } from "../../validator/userZodSchema.js";
const router = express.Router();

router.get("/", getUser);

router.get("/:id", getUserById);

router.post("/", validate(userZodSchema), createUser);

router.delete("/users/:id", deleteUserByid);
export default router;
