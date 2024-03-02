import { Schema, model } from "mongoose";

export interface User {
    id: number;
    name: string;
    email: string;
    password: string;
}

export const UserSchema = new Schema<User>({
    id: { type: Number, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
}, {
    toJSON: {
        virtuals: true
    }, toObject: {
        virtuals: true
    }, timestamps: true
});

export const UserModel = model<User>('user', UserSchema);