import express from "express";
import { signupUserController } from "../../controllers/userInfocontroller.js";

const router = express.Router();

router.post("/", signupUserController);

export default router;
