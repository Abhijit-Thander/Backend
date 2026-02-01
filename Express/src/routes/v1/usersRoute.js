import express from "express";
import {
  createUser,
  deleteUserByid,
  getUser,
  getUserById,
} from "../../controllers/userController.js";
import { validate } from "../../validator/jodValidator.js";
import { userZodSchema } from "../../validator/userZodSchema.js";
import { uploadMiddleware } from "../../config/multerConfig.js";
const upload = uploadMiddleware("backend")
const router = express.Router();

router.get("/", getUser);

router.get("/:id", getUserById);

router.post("/", upload.single('file'), validate(userZodSchema), createUser);

router.delete("/users/:id", deleteUserByid);
export default router;
