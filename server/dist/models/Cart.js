"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const cartSchema = new mongoose_1.default.Schema({
    user: {
        type: String,
        ref: "User"
    },
    products: [
        {
            product: {
                type: Number,
                ref: "Product"
            },
            quantity: Number,
            price: Number,
        }
    ],
    totalPrice: {
        type: Number,
        default: 0
    }
});
const Cart = mongoose_1.default.model("Cart", cartSchema);
exports.default = Cart;
//# sourceMappingURL=Cart.js.map