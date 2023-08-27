import mongoose, {Document, Model, Schema} from  "mongoose";

interface ProductInterface extends Document {
  name: string;
  price: number;
  quantity: number;
  description?: string;
  pictures?: string[];
}

const productSchema: Schema<ProductInterface> = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    default: 0,
    required: true
  },
  description: {
    type: String,
    required: false
  },
  pictures: {
    type: [],
    required: false
  },
  quantity: {
    type: Number,
    default: 0,
    required: true
  },
})

const Product: Model<ProductInterface> = mongoose.model("Product", productSchema);
export default Product;