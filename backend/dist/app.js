"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const NoteController_1 = require("./controller/NoteController");
const PersonController_1 = require("./controller/PersonController");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(new PersonController_1.PersonController().router);
app.use(new NoteController_1.NoteController().router);
app.use((req, res) => res.status(404).send("Not found"));
app.listen(5000);
//# sourceMappingURL=app.js.map