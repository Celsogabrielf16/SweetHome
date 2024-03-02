import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { users } from "../data";
import { IUser, UserModel } from "../models/user.model";

export class UserController {
    public static async userSeed(req: Request, res: Response) {
        const usersCount = await UserModel.countDocuments();

        if (usersCount > 0) {
            res.send("Seed is already done!");
            return;
        } 

        await UserModel.create(users);
        res.send("Seed is done!")
    }

    public static async login(req: Request, res: Response) {
        const { email, password } = req.body;

        const user: IUser | null = await UserModel.findOne({email, password});
    
        if(user) {
            const token = jwt.sign({
                email: user.email
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