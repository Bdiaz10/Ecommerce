"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCart = exports.createCart = exports.getCartById = exports.getAllCarts = void 0;
const Cart_1 = __importDefault(require("../models/Cart"));
// GET functions ----------------------------------
const getAllCarts = async (req, res) => {
    try {
        const cart = await Cart_1.default.find();
        if (!cart) {
            return res.status(200).json({ messsage: "No Carts in DB" });
        }
        return res.status(200).json(cart);
    }
    catch (error) {
        return res.status(500).json({ messsage: "Error retrieving carts" });
    }
};
exports.getAllCarts = getAllCarts;
const getCartById = async (req, res) => {
    try {
        const id = req.params.id;
        const cart = await Cart_1.default.findById(id);
        if (!cart) {
            return res.status(404).json({ message: "Cart not found with id: " + id });
        }
        return res.status(200).json(cart);
    }
    catch (error) {
        return res.status(500).json({ message: "Failed to get cart by id" });
    }
};
exports.getCartById = getCartById;
// POST functions ----------------------------------
const createCart = async (req, res) => {
    try {
        const newCart = new Cart_1.default(req.body);
        await newCart.save();
        return res.status(201).json({ message: "Cart Created" });
    }
    catch (error) {
        return res.status(500).json({ message: "Failed to Create Cart" });
    }
};
exports.createCart = createCart;
// DELETE functions ----------------------------------
const deleteCart = async (req, res) => {
    try {
        const cart = await Cart_1.default.findOne({ _id: req.params.id });
        if (!cart) {
            return res.status(200).json({ message: "Cart does not exist to delete" });
        }
        await Cart_1.default.findByIdAndDelete(req.params.id);
        return res.status(200).json({ message: "Cart deleted successfully" });
    }
    catch (error) {
        return res.status(500).json({ message: "Failed to Delete Cart" });
    }
};
exports.deleteCart = deleteCart;
//# sourceMappingURL=cartController.js.map