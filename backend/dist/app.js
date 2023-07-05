"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const NoteController_1 = require("./controller/NoteController");
const PersonController_1 = require("./controller/PersonController");
const bodyParser = require("body-parser");
const app = express();
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    next();
});
app.use(bodyParser.json());
app.use(new PersonController_1.PersonController().router);
app.use(new NoteController_1.NoteController().router);
app.use((req, res) => res.status(404).send("<h1>Not found. Requested source is unknown</h1>"));
app.listen(5000);
//# sourceMappingURL=app.js.map