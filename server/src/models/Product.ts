import mongoose, {Document, Model, Schema} from  "mongoose";

interface ProductInterface extends Document {
  id?: number;
  name: string;
  price?: number;
  quantity?: number;
}

const productSchema: Schema<ProductInterface> = new mongoose.Schema({
  id: {
    type: Number,
    required: false
  },
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: false
  },
  quantity: {
    type: Number,
    required: false
  },

})

const Product: Model<ProductInterface> = mongoose.model("Product", productSchema);
export default Product;