import express from "express";
import cors from "cors";
import { properties, tags } from "./data";

const server = express();
const port = 3000;

server.use(cors({
    credentials: true,
    origin:["http://localhost:4200"]
}));

server.get("/property", (req, res) => {
    res.send(properties);
});

server.get("/property/tags", (req, res) => {
    res.send(tags);
})

server.get("/property/id/:idSearched", (req, res) => {
    const { idSearched } = req.params;
    const propertiesFound = properties
        .find(item => item.id == idSearched);
    res.send(propertiesFound);
})

server.get("/property/city/:citySearched", (req, res) => {
    const { citySearched } = req.params;
    const propertiesFound = properties
        .filter(property => property.city.toLowerCase()
        .includes(citySearched.toLowerCase()));
    res.send(propertiesFound);
});

server.get("/property/tag/:tagSearched", (req, res) => {
    const { tagSearched } = req.params;
    const propertiesFound = properties
        .filter(property => property.tags?.includes(tagSearched));
    res.send(propertiesFound);
});

server.get("/property/city/:citySearched/tag/:tagSearched", (req, res) => {
    const { citySearched, tagSearched } = req.params;
    const propertiesFound = properties
        .filter(property => property.city.toLowerCase()
        .includes(citySearched.toLowerCase()))
        .filter(property => property.tags?.includes(tagSearched));
    res.send(propertiesFound);
});

server.listen(port, () => {
    console.log(`Servidor rodando na porta http://localhost:${port}`)
});