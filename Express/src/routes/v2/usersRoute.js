import express from "express";
import {
  createUserController,
  deleteUserByidController,
  getUserByIdController,
  getUserController,
} from "../../controllers/userController.js";
import { validate } from "../../validator/jodValidator.js";
import { userZodSchema } from "../../validator/userZodSchema.js";
const router = express.Router();

router.get("/", getUserController);

router.get("/:id", getUserByIdController);

router.post("/", validate(userZodSchema), createUserController);

router.delete("/users/:id", deleteUserByidController);
export default router;
