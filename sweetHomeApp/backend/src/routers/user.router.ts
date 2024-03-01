import { UserController } from "../controllers/user.controller";
import { users } from "../data";
import { Router } from "express";

const router = Router();

router.post("/login", (req, res) => {
    UserController.login(req, res);
})

export default router;