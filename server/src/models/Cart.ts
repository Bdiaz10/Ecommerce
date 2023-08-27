import mongoose, { Document, Schema, Model } from "mongoose";

interface CartItem {
  product: number;
  quantity: number;
  price: number;
}

interface CartInterface extends Document {
  user: string;
  products?: CartItem[];
  totalPrice?: number;
}

const cartSchema: Schema<CartInterface> = new mongoose.Schema({
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

const Cart: Model<CartInterface> = mongoose.model("Cart", cartSchema);
export default Cart;