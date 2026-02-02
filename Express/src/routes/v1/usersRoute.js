import express from "express";
import {
  createUserController,
  deleteUserByidController,
  getUserController,
  getUserByIdController,
} from "../../controllers/userController.js";
import { validate } from "../../validator/jodValidator.js";
import { userZodSchema } from "../../validator/userZodSchema.js";
import { uploadMiddleware } from "../../config/multerConfig.js";
const upload = uploadMiddleware("backend");
const router = express.Router();

router.get("/", getUserController);

router.get("/:id", getUserByIdController);

router.post(
  "/",
  upload.single("file"),
  validate(userZodSchema),
  createUserController,
);

router.delete("/users/:id", deleteUserByidController);
export default router;
