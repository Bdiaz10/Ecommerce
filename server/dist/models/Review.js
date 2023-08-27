"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
var Rating;
(function (Rating) {
    Rating[Rating["OneStar"] = 1] = "OneStar";
    Rating[Rating["TwoStars"] = 2] = "TwoStars";
    Rating[Rating["ThreeStars"] = 3] = "ThreeStars";
    Rating[Rating["FourStars"] = 4] = "FourStars";
    Rating[Rating["FiveStars"] = 5] = "FiveStars";
})(Rating || (Rating = {}));
const reviewSchema = new mongoose_1.default.Schema({
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
const Review = mongoose_1.default.model("Review", reviewSchema);
exports.default = Review;
//# sourceMappingURL=Review.js.map