import { User } from './../../../frontend/src/app/shared/models/User';
import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import bcrypt from 'bcryptjs';

import { users } from "../data";
import { IUser, UserModel } from "../models/user.model";

function generateTokenResponse(user: User) {
    const token = jwt.sign({
        email: user.email
    }, "SomeRandomText", {
        expiresIn: "30d"
    });

    user.token = token;
    return user;
}
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
        const user: IUser | null = await UserModel.findOne({email});

        if(user) {
            const passwordValid = await bcrypt.compare(password, user.password);
            
            if(passwordValid) {
                res.send(generateTokenResponse(user));
            } else {
                res.status(400).send("Senha Incorreta!");
            }
        } else {
            res.status(400).send("Usuario não encontrado!");
        }
    }

    public static async register(req: Request, res: Response) {
        const { name, email, password } = req.body;
        const user = await UserModel.findOne({email});

        if(user) {
            res.status(400).send('Usuario ja existe!');
            return;
        }

        const passwordHash = await bcrypt.hash(password, 10);

        const newUser: User = {
            id: '',
            name,
            email: email.toLowerCase(),
            password: passwordHash,
            token: ''
        }

        const databaseUser = await UserModel.create(newUser);
        res.send(generateTokenResponse(databaseUser));
    }
}