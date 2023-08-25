import mongoose, { Document, Model, Schema } from "mongoose"

enum OrderStatus {
  PROCESSING = "PROCESSING",
  SHIPPED    = "SHIPPED",
  COMPLETE   = "COMPLETE", 
  CANCELLED  = "CANCELLED"
}

interface OrderItem {
  product: number;
  quantity: number;
  price: number;
}

interface OrderInterface extends Document {
  user: number;
  orderList: OrderItem[];
  totalPrice: number;
  status: OrderStatus;
  createdAt: Date;
  updatedAt: Date;
}

const orderSchema: Schema<OrderInterface> = new mongoose.Schema({
  user: {
    type: Number,
    ref: "User"
  },
  orderList: [
    {
      product: {
        type: Number,
        ref: "Product"
      }, 
      quantity: Number,
      price: Number
    }
  ],
  totalPrice: {
    type: Number
  },
  status: {
    type: String,
    enum: Object.values(OrderStatus)
  },
  createdAt: Date,
  updatedAt: Date
})

const Order: Model<OrderInterface> = mongoose.model("Order", orderSchema)
export default Order;