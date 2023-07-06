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
exports.Repository = void 0;
const dbConnection_1 = require("../db/dbConnection");
class Repository {
    constructor(table) {
        this.table = table;
    }
    add(dataObject) {
        return new Promise((resolve) => __awaiter(this, void 0, void 0, function* () {
            const query = `INSERT INTO ${this.table}(${this.getDataObjectProps(dataObject)}) VALUES(${this.getDataObjectPlaceholders(dataObject)}) RETURNING *`;
            const data = yield dbConnection_1.pool.query(query, this.getDataObjectValues(dataObject));
            resolve(data.rows[0]);
        }));
    }
    delete(dataObject) {
        return new Promise((resolve) => __awaiter(this, void 0, void 0, function* () {
            resolve(yield this.deleteById(parseInt(dataObject.id)));
        }));
    }
    deleteById(id) {
        return new Promise((resolve) => __awaiter(this, void 0, void 0, function* () {
            const query = `DELETE FROM ${this.table} WHERE id = $1`;
            yield dbConnection_1.pool.query(query, [id]);
            resolve(true);
        }));
    }
    findAll() {
        return new Promise((resolve) => __awaiter(this, void 0, void 0, function* () {
            const data = yield dbConnection_1.pool.query(`SELECT * FROM ${this.table}`);
            resolve(data.rows);
        }));
    }
    findById(id) {
        return new Promise((resolve) => __awaiter(this, void 0, void 0, function* () {
            const query = `SELECT * FROM ${this.table} WHERE id = $1`;
            const data = yield dbConnection_1.pool.query(query, [id]);
            resolve(data.rows[0]);
        }));
    }
    update(dataObject) {
        return new Promise((resolve) => __awaiter(this, void 0, void 0, function* () {
            const query = `UPDATE ${this.table} SET ${this.getUpdateProps(dataObject)} WHERE id = $1 RETURNING *`;
            const data = yield dbConnection_1.pool.query(query, [
                dataObject.id,
                ...this.getUpdateValues(dataObject),
            ]);
            resolve(data.rows[0]);
        }));
    }
    updateById(id, dataObject) {
        return new Promise((resolve) => __awaiter(this, void 0, void 0, function* () {
            const query = `UPDATE ${this.table} SET ${this.getUpdateProps(dataObject)} WHERE id = $1 RETURNING *`;
            const data = yield dbConnection_1.pool.query(query, [
                id,
                ...this.getUpdateValues(dataObject),
            ]);
            resolve(data.rows[0]);
        }));
    }
    getUpdateProps(dataObject) {
        let code = "";
        let count = 1;
        for (const key in dataObject) {
            if (key === "id") {
                continue;
            }
            count++;
            if (code.length > 0) {
                code += `,`;
            }
            code += `${key}=$${count}`;
        }
        return code;
    }
    getUpdateValues(dataObject) {
        const values = [];
        for (const key in dataObject) {
            if (key === "id") {
                continue;
            }
            values.push(dataObject[key]);
        }
        return values;
    }
    getDataObjectProps(dataObject) {
        let code = "";
        for (const key in dataObject) {
            if (key === "id") {
                continue;
            }
            if (code === "") {
                code += key;
            }
            else {
                code += `,${key}`;
            }
        }
        return code;
    }
    getDataObjectPlaceholders(dataObject) {
        let code = "";
        let count = 0;
        for (const key in dataObject) {
            if (key === "id") {
                continue;
            }
            count++;
            if (code.length > 0) {
                code += `,`;
            }
            code += `$${count}`;
        }
        return code;
    }
    getDataObjectValues(dataObject) {
        let values = [];
        for (const key in dataObject) {
            if (key === "id") {
                continue;
            }
            values.push(dataObject[key]);
        }
        return values;
    }
}
exports.Repository = Repository;
//# sourceMappingURL=Repository.js.map