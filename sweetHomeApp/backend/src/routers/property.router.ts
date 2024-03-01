import  { Router } from 'express';
import { PropertyController } from '../controllers/property.controller';

const router = Router();

router.get("/", (req, res) => {
    PropertyController.getAllProperties(req, res);
});

router.get("/tags", (req, res) => {
    PropertyController.getAllPropertiesTags(req, res);
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

router.get("/city/:citySearched/tag/:tagSearched", (req, res) => {
    PropertyController.getPropertiesByCityAndTag(req, res);
});

export default router;