import mongoose, { Document, Schema, Model } from "mongoose";

enum Rating {
  OneStar = 1,
  TwoStars,
  ThreeStars,
  FourStars,
  FiveStars
}
interface ReviewInterface extends Document {
  user: string;
  product: string;
  rating: number;
  comment: string;
}

const reviewSchema: Schema<ReviewInterface> = new mongoose.Schema({
  user: {
    type: String,
    ref: "User",
  },
  product: {
    type: String,
    ref: "Product"
  },
  rating: {
    type: Number,
    enum: Object.values(Rating)
  },
  comment: {
    type: String
  },
});

const Review: Model<ReviewInterface> = mongoose.model("Review", reviewSchema);
export default Review;