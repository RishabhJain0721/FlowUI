import express from "express";
import logRoutes from "./src/logRoutes.js";

const router = express.Router();

router.use("/log", logRoutes);

export default router;
