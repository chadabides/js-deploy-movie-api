"use strict";
const connectionString = 'mongodb://apiuser:!Agile$@ds117839.mlab.com:17839/live-exam-practice';
const mongodb = require("mongodb");
class Database {
    static connect() {
        return mongodb.MongoClient.connect(connectionString).then((db) => {
            console.log('successful db connection');/* eslint-disable no-console */
            this.db = db;
        }).catch((err) => {
            console.error(err);
        });
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Database;
