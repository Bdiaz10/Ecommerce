"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.createUser = exports.getUserById = exports.getAllUsers = void 0;
const User_1 = __importDefault(require("../models/User"));
const bcrypt_1 = __importDefault(require("bcrypt"));
// GET functions ----------------------------------
const getAllUsers = async (req, res) => {
    try {
        const users = await User_1.default.find();
        if (!users) {
            return res.status(200).json({ messsage: "No Users in DB" });
        }
        return res.status(200).json(users);
    }
    catch (error) {
        res.status(500).json({ messsage: "Error retrieving users" });
    }
};
exports.getAllUsers = getAllUsers;
const getUserById = async (req, res) => {
    try {
        const id = req.params.id;
        const user = await User_1.default.findById(id);
        if (!user) {
            return res.status(200).json({ message: "User not found with id: " + id });
        }
        return res.status(200).json(user);
    }
    catch (error) {
        return res.status(500).json({ message: "Failed to get user by id" });
    }
};
exports.getUserById = getUserById;
// POST functions ----------------------------------
const createUser = async (req, res) => {
    try {
        const email = req.body.email;
        const user = await User_1.default.findOne({ email: email });
        if (user) {
            return res.status(200).json({ message: "User with email already exists" });
        }
        else {
            const { password } = req.body;
            const hashedPassword = await bcrypt_1.default.hash(password, 10);
            const newUser = new User_1.default({ ...req.body, password: hashedPassword });
            await newUser.save();
            return res.status(201).json({ message: "User Created" });
        }
    }
    catch (error) {
        return res.status(500).json({ message: "Failed to Create User" });
    }
};
exports.createUser = createUser;
// DELETE functions ----------------------------------
const deleteUser = async (req, res) => {
    try {
        const user = await User_1.default.findOne({ _id: req.params.id });
        if (!user) {
            return res.status(500).json({ message: "User does not exist to delete" });
        }
        await User_1.default.findByIdAndDelete(req.params.id);
        return res.status(200).json({ message: "User deleted successfully" });
    }
    catch (error) {
        return res.status(500).json({ message: "Failed to Delete User" });
    }
};
exports.deleteUser = deleteUser;
//# sourceMappingURL=userController.js.map