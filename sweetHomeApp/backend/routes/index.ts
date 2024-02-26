import cors from "cors";

const propertyRoute = require("./propertyRoute")

module.exports = (server) => {
    server.use((req, res, next) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");
        res.header("Access-Control-Allow-Headers", "Content-Type");
        server.use(cors({
            credentials: true,
            origin:["http://localhost:4200"]
        }));
        next();
    });
    server.use(propertyRoute)
}