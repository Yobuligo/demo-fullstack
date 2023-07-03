import express = require("express");
import { NoteController } from "./controller/NoteController";
import { PersonController } from "./controller/PersonController";
import bodyParser = require("body-parser");
import cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(new PersonController().router);
app.use(new NoteController().router);
app.use((req, res) =>
  res.status(404).send("<h1>Not found. Requested source is unknown</h1>")
);
app.listen(5000);
