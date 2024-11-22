import express from "express";
import { sendAllLogs, addLog } from "../../controllers/logController.js";

const router = express.Router();

router.get("/", sendAllLogs);
router.post("/", addLog);

export default router;
