"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const db_1 = require("./config/db");
// load environment variables
dotenv_1.default.config();
// create express app
const app = (0, express_1.default)();
console.log("created express app...");
app.use((0, cors_1.default)());
console.log("cors enabled...");
// connect to Mongo DB
(0, db_1.connectMongo)();
console.log('server connected to db');
app.listen(process.env.PORT || 3001, () => {
    console.log("app is avaible on port: " + "3001");
});
//# sourceMappingURL=index.js.map