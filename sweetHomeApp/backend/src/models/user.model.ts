import { Schema, model } from "mongoose";

export interface IUser {
    id: number;
    name: string;
    email: string;
    password: string;
    token: string;
}

export const UserSchema = new Schema<IUser>({
    id: { type: Number, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    token: { type: String, required: true },
}, {
    toJSON: {
        virtuals: true
    }, toObject: {
        virtuals: true
    }, timestamps: true
});

export const UserModel = model<IUser>('user', UserSchema);