import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { users } from "../data";

export class UserController {
    public static async login(req: Request, res: Response) {
        const { email, password } = req.body;
        const user = users.find((user) => {
            return user.email === email && user.password === password;
        })
    
        if(user) {
            const token = jwt.sign({
                email:user.email
            }, "SomeRandomText", {
                expiresIn: "30d"
            });
        
            user.token = token;

            res.send(user);
        } else {
            res.status(400).send("Deu ruim!");
        }
    }
}