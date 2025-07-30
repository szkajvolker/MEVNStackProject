import express from "express";
import { register } from "../controllers/reg.controller.js";

const router = express.Router();

router.post("/", register);

export default router;
