import { Router } from "express";
import { register } from "../controller/user-controller";

const router = Router();
router.post("/user", register)
export default router;