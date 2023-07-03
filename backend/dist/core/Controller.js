"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Controller = void 0;
const express_1 = require("express");
const IdProvider_1 = require("../services/IdProvider");
class Controller {
    constructor(path, data = []) {
        this.path = path;
        this.data = data;
        this.version = new Date();
        this.router = (0, express_1.Router)();
        this.delete();
        this.get();
        this.post();
        this.put();
        this.lastVersion();
    }
    delete() {
        this.router.delete(`${this.path}/:id`, (req, res) => {
            const index = this.findIndexByReq(req.params.id);
            if (index === -1) {
                return res.status(404).send();
            }
            const item = this.data[index];
            this.data.splice(index, 1);
            this.updateVersion();
            res.status(200).send(this.createEnvelope(item));
        });
    }
    get() {
        this.router.get(this.path, (req, res) => {
            res.status(200).send(this.createEnvelope(this.data));
        });
    }
    post() {
        this.router.post(this.path, (req, res) => {
            const body = req.body;
            console.log(body);
            const item = Object.assign({ id: IdProvider_1.IdProvider.next(), createdAt: new Date(), changedAt: new Date() }, body);
            this.data.push(item);
            this.updateVersion();
            res.status(200).send(this.createEnvelope(item));
        });
    }
    put() {
        this.router.put(`${this.path}/:id`, (req, res) => {
            console.log("Put was called");
            const index = this.findIndexByReq(req.params.id);
            if (index === -1) {
                return res.status(404).send();
            }
            const body = req.body;
            const item = Object.assign(Object.assign(Object.assign({}, this.data[index]), { changedAt: new Date() }), body);
            this.data[index] = item;
            this.updateVersion();
            res.status(200).send(this.createEnvelope(item));
        });
    }
    lastVersion() {
        this.router.get(`${this.path}/version`, (req, res) => {
            res.status(200).send(this.version);
        });
    }
    findIndexByReq(id) {
        console.log(this.data);
        return this.data.findIndex((item) => item.id === id);
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