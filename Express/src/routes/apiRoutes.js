import express from "express";
const router = express.Router();
import v1Router from "../routes/v1/v1Routes.js";
import signupRouter from "./v1/signUp.js";
import signinRouter from "./v1/signIn.js";

router.use("/v1", v1Router);
router.use("/signup", signupRouter);
router.use("/signin", signinRouter);

export default router;
