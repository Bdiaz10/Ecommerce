"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const uri = "mongodb+srv://Admin:Password@cluster0.epibfim.mongodb.net/?retryWrites=true&w=majority";
const mongoose_1 = __importDefault(require("mongoose"));
const connectMongo = async () => {
    try {
        await mongoose_1.default.connect(uri);
        console.log("conneceted to mongo");
    }
    catch (error) {
        console.error("error connecting to mongo", error);
    }
};
exports.default = connectMongo;
//# sourceMappingURL=db.js.map