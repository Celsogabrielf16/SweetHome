import { Request, Response } from 'express';
import { propertiesData, tags } from '../data';
import { PropertyModel } from '../models/property.model';

export class PropertyController {
    public static async propertySeed(req: Request, res: Response) {
        const propertiesCount = await PropertyModel.countDocuments();

        if (propertiesCount > 0) {
            res.send("Seed is already done!");
            return;
        } 

        await PropertyModel.create(propertiesData);
        res.send("Seed is done!")
    }

    public static async getAllProperties(req: Request, res: Response) {
        const properties = await PropertyModel.find();
        res.send(properties);
    }

    public static async getAllTags(req: Request, res: Response) {
        res.send(tags);
    }

    public static async getPropertyByID(req: Request, res: Response) {
        const properties = await PropertyModel.findById(req.params.idSearched);
        res.send(properties);
    }

    public static async getPropertiesByCity(req: Request, res: Response) {
        const searchRegex = new RegExp(req.params.citySearched, 'i');
        const properties = await PropertyModel.find({city: {$regex: searchRegex}});
        res.send(properties);
    }
    
    public static async getPropertiesByTag(req: Request, res: Response) {
        const properties = await PropertyModel.find({tags: req.params.tagSearched});
        res.send(properties);
    }

    public static async getPropertiesByMinimumPrice(req: Request, res: Response) {
        const properties = await PropertyModel.find({price: {$gte: req.params.minimunPrice}});
        res.send(properties);
    }

    public static async getPropertiesByMaximumPrice(req: Request, res: Response) {
        const properties = await PropertyModel.find({price: {$lte: req.params.maximunPrice}});
        res.send(properties);
    }

    public static async getPropertiesByBedrooms(req: Request, res: Response) {
        const properties = await PropertyModel.find({bedroom: req.params.numberOfBedrooms});
        res.send(properties);
    }
    
    public static async getPropertiesByCityAndTag(req: Request, res: Response) {
        const searchRegex = new RegExp(req.params.citySearched, 'i');
        const properties = await PropertyModel.find(
            {
                tags: req.params.tagSearched,
                city: {$regex: searchRegex}
            }
        );
        res.send(properties);
    }
}