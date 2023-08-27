"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProduct = exports.createProduct = exports.getProductById = exports.getAllProducts = void 0;
const Product_1 = __importDefault(require("../models/Product"));
// GET functions ----------------------------------
const getAllProducts = async (req, res) => {
    try {
        const products = await Product_1.default.find();
        if (!products) {
            res.status(500).json({ messsage: "No Products in DB" });
        }
        res.status(201).json(products);
    }
    catch (error) {
        res.status(500).json({ messsage: "Error retrieving products" });
    }
};
exports.getAllProducts = getAllProducts;
const getProductById = async (req, res) => {
    try {
        const id = req.params.id;
        const product = await Product_1.default.findById(id);
        if (!product) {
            res.status(500).json({ message: "Product not found with id: " + id });
        }
        res.status(201).json(product);
    }
    catch (error) {
        res.status(500).json({ message: "Failed to get product by id" });
    }
};
exports.getProductById = getProductById;
// POST functions ----------------------------------
const createProduct = async (req, res) => {
    try {
        const name = req.body.name;
        const product = await Product_1.default.findOne({ name: name });
        if (!product) {
            res.status(500).json({ message: "Product with name already exists" });
        }
        const newProduct = new Product_1.default(req.body);
        await newProduct.save();
        res.status(201).json({ message: "Product Created" });
    }
    catch (error) {
        res.status(500).json({ message: "Failed to Create Product" });
    }
};
exports.createProduct = createProduct;
// DELETE functions ----------------------------------
const deleteProduct = async (req, res) => {
    try {
        const product = await Product_1.default.findOne({ _id: req.params.id });
        if (!product) {
            res.status(500).json({ message: "Product does not exist to delete" });
        }
        await Product_1.default.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Product deleted successfully" });
    }
    catch (error) {
        res.status(500).json({ message: "Failed to Delete Product" });
    }
};
exports.deleteProduct = deleteProduct;
//# sourceMappingURL=productController.js.map