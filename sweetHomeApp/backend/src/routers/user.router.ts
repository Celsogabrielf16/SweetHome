import { UserController } from "../controllers/user.controller";
import { Router } from "express";

const router = Router();

router.get("/seed", (req, res) => {
    UserController.userSeed(req, res);
});

router.post("/login", (req, res) => {
    UserController.login(req, res);
})

router.post("/register", (req, res) => {
    UserController.register(req, res);
})

export default router;