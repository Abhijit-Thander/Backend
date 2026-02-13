import express from "express";
import { signinUserController } from "../../controllers/userInfocontroller.js";

const router = express.Router();

router.post("/", signinUserController);

export default router;
