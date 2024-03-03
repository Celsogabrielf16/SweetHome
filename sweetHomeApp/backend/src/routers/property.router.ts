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

// 1 Input - 5/5 rotas
router.get("/city/:citySearched", (req, res) => {
    PropertyController.getPropertiesByCity(req, res);
});

router.get("/tag/:tagSearched", (req, res) => {
    PropertyController.getPropertiesByTag(req, res);
});

router.get("/minimunPrice/:minimunPrice", (req, res) => {
    PropertyController.getPropertiesByMinimumPrice(req, res);
});

router.get("/maximunPrice/:maximunPrice", (req, res) => {
    PropertyController.getPropertiesByMaximumPrice(req, res);
});

router.get("/numberOfBedrooms/:numberOfBedrooms", (req, res) => {
    PropertyController.getPropertiesByBedrooms(req, res);
});

// 2 Inputs - 7/10 rotas
router.get("/city/:citySearched/tag/:tagSearched", (req, res) => {
    PropertyController.getPropertiesByCityAndTag(req, res);
});

router.get("/city/:citySearched/minimunPrice/:minimunPrice", (req, res) => {
    PropertyController.getPropertiesByCityAndMinimunPrice(req, res);
});

router.get("/city/:citySearched/maximunPrice/:maximunPrice", (req, res) => {
    PropertyController.getPropertiesByCityAndMaximunPrice(req, res);
});

router.get("/city/:citySearched/numberOfBedrooms/:numberOfBedrooms", (req, res) => {
    PropertyController.getPropertiesByCityAndBedrooms(req, res);
});

router.get("/tag/:tagSearched/minimunPrice/:minimunPrice", (req, res) => {
    PropertyController.getPropertiesByTagAndMinimunPrice(req, res);
});

router.get("/tag/:tagSearched/maximunPrice/:maximunPrice", (req, res) => {
    PropertyController.getPropertiesByTagAndMaximunPrice(req, res);
});

router.get("/tag/:tagSearched/numberOfBedrooms/:numberOfBedrooms", (req, res) => {
    PropertyController.getPropertiesByTagAndBedrooms(req, res);
});

router.get("/minimunPrice/:minimunPrice/maximunPrice/:maximunPrice", (req, res) => {
    PropertyController.getPropertiesByPriceRange(req, res);
});


// 3 Inputs - 0/10 rotas 

// 4 Inputs - 5/5 rotas

router.get("/tag/:tagSearched/minimunPrice/:minimunPrice/maximunPrice/:maximunPrice/numberOfBedrooms/:numberOfBedrooms", (req, res) => {
    PropertyController.getPropertiesByTagPriceRangeAndBedrooms(req, res);
});

router.get("/city/:citySearched/minimunPrice/:minimunPrice/maximunPrice/:maximunPrice/numberOfBedrooms/:numberOfBedrooms", (req, res) => {
    PropertyController.getPropertiesByCityPriceRangeAndBedrooms(req, res);
});

router.get("/city/:citySearched/tag/:tagSearched/maximunPrice/:maximunPrice/numberOfBedrooms/:numberOfBedrooms", (req, res) => {
    PropertyController.getPropertiesByCityTagMaximunPriceAndBedrooms(req, res);
});

router.get("/city/:citySearched/tag/:tagSearched/minimunPrice/:minimunPrice/numberOfBedrooms/:numberOfBedrooms", (req, res) => {
    PropertyController.getPropertiesByCityTagMinimunPriceAndBedrooms(req, res);
});

router.get("/city/:citySearched/tag/:tagSearched/minimunPrice/:minimunPrice/maximunPrice/:maximunPrice", (req, res) => {
    PropertyController.getPropertiesByCityTagAndPriceRange(req, res);
});

// 5 Inputs - 1/1 rota

router.get("/city/:citySearched/tag/:tagSearched/minimunPrice/:minimunPrice/maximunPrice/:maximunPrice/numberOfBedrooms/:numberOfBedrooms", (req, res) => {
    PropertyController.getPropertiesByCityTagPriceRangeAndBedrooms(req, res);
});

export default router;