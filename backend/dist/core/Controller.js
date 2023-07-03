"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Controller = void 0;
const express_1 = require("express");
const IdProvider_1 = require("../services/IdProvider");
class Controller {
    constructor(path, data = []) {
        this.path = path;
        this.data = data;
        this.router = (0, express_1.Router)();
        this.delete();
        this.get();
        this.post();
        this.put();
    }
    delete() {
        this.router.delete(`${this.path}/:id`, (req, res) => {
            const index = this.findIndexByReq(req.params.id);
            if (index === -1) {
                return res.status(404).send();
            }
            const item = this.data[index];
            this.data.splice(index, 1);
            res.status(200).send(item);
        });
    }
    get() {
        this.router.get(this.path, (req, res) => {
            res.status(200).send(this.data);
        });
    }
    post() {
        this.router.post(this.path, (req, res) => {
            const body = req.body;
            console.log(body);
            const item = Object.assign({ id: IdProvider_1.IdProvider.next() }, body);
            this.data.push(item);
            res.status(200).send(item);
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
            const item = Object.assign(Object.assign({}, this.data[index]), body);
            this.data[index] = item;
            res.status(200).send(item);
        });
    }
    findIndexByReq(id) {
        console.log(this.data);
        return this.data.findIndex((item) => item.id === id);
    }
}
exports.Controller = Controller;
//# sourceMappingURL=Controller.js.map