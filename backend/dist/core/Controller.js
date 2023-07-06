"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Controller = void 0;
const express_1 = require("express");
class Controller {
    constructor(path, repository) {
        this.path = path;
        this.repository = repository;
        this.version = new Date();
        this.router = (0, express_1.Router)();
        this.delete();
        this.get();
        this.post();
        this.put();
        this.lastVersion();
    }
    delete() {
        this.router.delete(`${this.path}/:id`, (req, res) => __awaiter(this, void 0, void 0, function* () {
            const success = yield this.repository.deleteById(parseInt(req.params.id));
            this.updateVersion();
            res.status(200).send(success);
        }));
    }
    get() {
        this.router.get(this.path, (req, res) => __awaiter(this, void 0, void 0, function* () {
            const data = yield this.repository.findAll();
            res.status(200).send(this.createEnvelope(data));
        }));
    }
    post() {
        this.router.post(this.path, (req, res) => __awaiter(this, void 0, void 0, function* () {
            const body = req.body;
            const item = yield this.repository.add(body);
            this.updateVersion();
            res.status(200).send(item);
        }));
    }
    put() {
        this.router.put(`${this.path}/:id`, (req, res) => __awaiter(this, void 0, void 0, function* () {
            const body = req.body;
            const item = yield this.repository.updateById(parseInt(req.params.id), body);
            this.updateVersion();
            res.status(200).send(item);
        }));
    }
    lastVersion() {
        this.router.get(`${this.path}/version`, (req, res) => {
            res.status(200).send(this.version);
        });
    }
    updateVersion() {
        this.version = new Date();
    }
    createEnvelope(data) {
        return { version: this.version, data };
    }
}
exports.Controller = Controller;
//# sourceMappingURL=Controller.js.map