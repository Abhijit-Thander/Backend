import express from "express";

const router = express.Router();

router.post("/signup", signupUserControler);
router.post("/signin", loginUserControler);

export default router;
