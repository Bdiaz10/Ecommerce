"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteOrder = exports.createOrder = exports.getOrderById = exports.getAllOrders = void 0;
const Order_1 = __importDefault(require("../models/Order"));
// GET functions ----------------------------------
const getAllOrders = async (req, res) => {
    try {
        const orders = await Order_1.default.find();
        if (!orders) {
            return res.status(200).json({ messsage: "No Orders in DB" });
        }
        return res.status(200).json(orders);
    }
    catch (error) {
        return res.status(500).json({ messsage: "Error retrieving orders" });
    }
};
exports.getAllOrders = getAllOrders;
const getOrderById = async (req, res) => {
    try {
        const id = req.params.id;
        const order = await Order_1.default.findById(id);
        if (!order) {
            return res.status(404).json({ message: "Order not found with id: " + id });
        }
        return res.status(200).json(order);
    }
    catch (error) {
        return res.status(500).json({ message: "Failed to get order by id" });
    }
};
exports.getOrderById = getOrderById;
// POST functions ----------------------------------
const createOrder = async (req, res) => {
    try {
        const newOrder = new Order_1.default(req.body);
        await newOrder.save();
        return res.status(201).json({ message: "Order Created" });
    }
    catch (error) {
        return res.status(500).json({ message: "Failed to Create Order" });
    }
};
exports.createOrder = createOrder;
// DELETE functions ----------------------------------
const deleteOrder = async (req, res) => {
    try {
        const order = await Order_1.default.findOne({ _id: req.params.id });
        if (!order) {
            return res.status(200).json({ message: "Order does not exist to delete" });
        }
        await Order_1.default.findByIdAndDelete(req.params.id);
        return res.status(200).json({ message: "Order deleted successfully" });
    }
    catch (error) {
        return res.status(500).json({ message: "Failed to Delete Order" });
    }
};
exports.deleteOrder = deleteOrder;
//# sourceMappingURL=orderController.js.map