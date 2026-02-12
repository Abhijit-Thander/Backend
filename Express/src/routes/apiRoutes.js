import express from "express";
const router = express.Router();
import v1Router from "../routes/v1/v1Routes.js";

router.use("/v1", v1Router);

export default router;
