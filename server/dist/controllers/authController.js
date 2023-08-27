"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logout = exports.login = exports.register = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const User_1 = __importDefault(require("../models/User"));
const register = async (req, res) => {
    // add to mongo db
    try {
        const { email, password } = req.body;
        const hashedPassword = await bcrypt_1.default.hash(password, 10);
        const newUser = new User_1.default({ email, password: hashedPassword });
        await newUser.save();
        res.status(201).json({ message: "User Registered" });
    }
    catch (error) {
        res.status(500).json({ message: "Failed to Register" });
    }
};
exports.register = register;
const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User_1.default.findOne({ email });
        if (!user) {
            return res.status(401).json({ error: "Invalid Credentials" });
        }
        const passwordMatch = await bcrypt_1.default.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(401).json({ error: "Invalid Credentials" });
        }
        const token = jsonwebtoken_1.default.sign({ userId: user._id }, 'secret_key');
        res.json({ token });
    }
    catch (error) {
        res.status(500).jsson({ error: "Login Failed" });
    }
};
exports.login = login;
const logout = (req, res) => {
    // log out from session
    // return to sign in screen
    res.send("Loggin out!!");
};
exports.logout = logout;
//# sourceMappingURL=authController.js.map