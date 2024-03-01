import { Request, Response } from 'express';
import { properties, tags } from '../data';

export class PropertyController {
    public static async getAllProperties(req: Request, res: Response) {
        res.send(properties);
    }

    public static async getAllPropertiesTags(req: Request, res: Response) {
        res.send(tags);
    }

    public static async getPropertyByID(req: Request, res: Response) {
        const { idSearched } = req.params;
        const propertiesFound = properties
            .find(item => item.id == idSearched);
        res.send(propertiesFound);
    }

    public static async getPropertiesByCity(req: Request, res: Response) {
        const { citySearched } = req.params;
        const propertiesFound = properties
            .filter(property => property.city.toLowerCase()
            .includes(citySearched.toLowerCase()));
        res.send(propertiesFound);
    }

    public static async getPropertiesByTag(req: Request, res: Response) {
        const { tagSearched } = req.params;
        const propertiesFound = properties
            .filter(property => property.tags?.includes(tagSearched));
        res.send(propertiesFound);
    }

    public static async getPropertiesByCityAndTag(req: Request, res: Response) {
        const { citySearched, tagSearched } = req.params;
        const propertiesFound = properties
            .filter(property => property.city.toLowerCase()
            .includes(citySearched.toLowerCase()))
            .filter(property => property.tags?.includes(tagSearched));
        res.send(propertiesFound);
    }

}