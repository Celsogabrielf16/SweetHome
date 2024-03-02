import { Schema, model } from "mongoose";

export interface Property {
    id: number;
    street: string;
    number: number;
    neighborhood: string;
    city: string;
    uf: string;
    country: string;
    bedroom: number;
    bathroom: number;
    kitchen: number;
    spot: number;
    area: number;
    externalArea: number;
    price: number;
    title: string;
    description: string;
    contactNumber: string;
    email: string;
    url: string;
    tags: string[];
}

export const PropertySchema = new Schema<Property> ({
    street: { type: String, required: true },
    number: { type: Number, required: true },
    neighborhood: { type: String, required: true },
    city: { type: String, required: true },
    uf: { type: String, required: true },
    country: { type: String, required: true },
    bedroom: { type: Number, required: true },
    bathroom: { type: Number, required: true },
    kitchen: { type: Number, required: true },
    spot: { type: Number, required: true },
    area: { type: Number, required: true },
    externalArea: { type: Number, required: true },
    price: { type: Number, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    contactNumber: { type: String, required: true },
    email: { type: String, required: true },
    url: { type: String, required: true },
    tags: { type: [String] }
}, {
    toJSON: {
        virtuals: true
    }, toObject: {
        virtuals: true
    }, timestamps: true
});

export const PropertyModel = model<Property>('property', PropertySchema);