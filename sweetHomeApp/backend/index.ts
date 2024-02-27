import express from "express";
import cors from "cors";
import { properties, tags, users } from "./data";
import jwt from "jsonwebtoken";

const server = express();
const port = 3000;

server.use(express.json());

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

server.post("/users/login", (req, res) => {
    const { email, password } = req.body;
    const user = users.find((user) => {
        return user.email === email && user.password === password;
    })

    if(user) {
        res.send(generateTokenResponse(user));
    } else {
        res.status(400).send("Deu ruim!");
    }
})

const generateTokenResponse = (user: any) => {
    const token = jwt.sign({
        email:user.email
    }, "SomeRandomText", {
        expiresIn: "30d"
    });

    user.token = token;
    return user;
}

server.listen(port, () => {
    console.log(`Servidor rodando na porta http://localhost:${port}`)
});