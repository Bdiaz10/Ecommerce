import mongoose, { Document, Model, Schema } from "mongoose"

enum OrderStatus {
  PROCESSING = "PROCESSING",
  SHIPPED    = "SHIPPED",
  COMPLETE   = "COMPLETE", 
  CANCELLED  = "CANCELLED"
}

interface OrderItem {
  product: string;
  quantity: number;
  price: number;
}

interface OrderInterface extends Document {
  user: string;
  orderList?: OrderItem[];
  totalPrice: number;
  status: OrderStatus;
  createdAt?: Date;
  updatedAt?: Date;
}

const orderSchema: Schema<OrderInterface> = new mongoose.Schema({
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
})

const Order: Model<OrderInterface> = mongoose.model("Order", orderSchema)
export default Order;