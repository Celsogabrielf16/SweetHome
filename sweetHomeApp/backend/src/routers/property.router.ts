import  { Router } from 'express';
import { PropertyController } from '../controllers/property.controller';

const router = Router();

router.get("/seed", (req, res) => {
    PropertyController.propertySeed(req, res);
});

router.get("/", (req, res) => {
    PropertyController.getAllProperties(req, res);
});

router.get("/tags", (req, res) => {
    PropertyController.getAllTags(req, res);
})

router.get("/id/:idSearched", (req, res) => {
    PropertyController.getPropertyByID(req, res);
})

router.get("/city/:citySearched", (req, res) => {
    PropertyController.getPropertiesByCity(req, res);
});

router.get("/tag/:tagSearched", (req, res) => {
    PropertyController.getPropertiesByTag(req, res);
});

router.get("/maximunPrice/:maximunPrice", (req, res) => {
    PropertyController.getPropertiesByMaximumPrice(req, res);
});

router.get("/city/:citySearched/tag/:tagSearched", (req, res) => {
    PropertyController.getPropertiesByCityAndTag(req, res);
});

export default router;