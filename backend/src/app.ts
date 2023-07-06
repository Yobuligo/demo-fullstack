import express = require("express");
import { IdGeneratorService } from "./services/IIdGenerator";
import { IdGenerator } from "./services/IdGenerator";
import { SP } from "./shared/services/serviceProvider/ServiceProvider";
import bodyParser = require("body-parser");
import { PersonController } from "./models/persons/PersonController";
import { NoteController } from "./models/notes/NoteController";

SP.register(IdGeneratorService, IdGenerator);

const app = express();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use(bodyParser.json());
app.use(new PersonController().router);
app.use(new NoteController().router);
app.use((req, res) =>
  res.status(404).send("<h1>Not found. Requested source is unknown</h1>")
);
app.listen(5000);
