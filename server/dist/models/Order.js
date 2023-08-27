"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
var OrderStatus;
(function (OrderStatus) {
    OrderStatus["PROCESSING"] = "PROCESSING";
    OrderStatus["SHIPPED"] = "SHIPPED";
    OrderStatus["COMPLETE"] = "COMPLETE";
    OrderStatus["CANCELLED"] = "CANCELLED";
})(OrderStatus || (OrderStatus = {}));
const orderSchema = new mongoose_1.default.Schema({
    user: {
        type: String,
        ref: "User"
    },
    orderList: [
        {
            product: {
                type: String,
                ref: "Product"
            },
            quantity: Number,
            price: Number
        }
    ],
    totalPrice: {
        type: Number,
        default: 0
    },
    status: {
        type: String,
        enum: Object.values(OrderStatus),
        default: OrderStatus.PROCESSING,
    },
    createdAt: {
        type: Date,
        required: false
    },
    updatedAt: {
        type: Date,
        required: false
    }
});
const Order = mongoose_1.default.model("Order", orderSchema);
exports.default = Order;
//# sourceMappingURL=Order.js.map