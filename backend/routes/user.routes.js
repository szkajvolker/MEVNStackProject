import express from "express";
import { authMiddleware } from "../middlewares/auth.js";
import { getMe } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/me", authMiddleware, getMe);

export default router;
