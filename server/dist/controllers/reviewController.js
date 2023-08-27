"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteReview = exports.createReview = exports.getReviewById = exports.getAllReviews = void 0;
const Review_1 = __importDefault(require("../models/Review"));
// GET functions ----------------------------------
const getAllReviews = async (req, res) => {
    try {
        const reviews = await Review_1.default.find();
        if (!reviews) {
            return res.status(200).json({ messsage: "No Reviews in DB" });
        }
        return res.status(200).json(reviews);
    }
    catch (error) {
        return res.status(500).json({ messsage: "Error retrieving reviews" });
    }
};
exports.getAllReviews = getAllReviews;
const getReviewById = async (req, res) => {
    try {
        const id = req.params.id;
        const review = await Review_1.default.findById(id);
        if (!review) {
            return res.status(404).json({ message: "Review not found with id: " + id });
        }
        return res.status(200).json(review);
    }
    catch (error) {
        return res.status(500).json({ message: "Failed to get review by id" });
    }
};
exports.getReviewById = getReviewById;
// POST functions ----------------------------------
const createReview = async (req, res) => {
    try {
        const newReview = new Review_1.default(req.body);
        await newReview.save();
        return res.status(201).json({ message: "Review Created" });
    }
    catch (error) {
        return res.status(500).json({ message: "Failed to Create Review" });
    }
};
exports.createReview = createReview;
// DELETE functions ----------------------------------
const deleteReview = async (req, res) => {
    try {
        const review = await Review_1.default.findOne({ _id: req.params.id });
        if (!review) {
            return res.status(200).json({ message: "Review does not exist to delete" });
        }
        await Review_1.default.findByIdAndDelete(req.params.id);
        return res.status(200).json({ message: "Review deleted successfully" });
    }
    catch (error) {
        return res.status(500).json({ message: "Failed to Delete Review" });
    }
};
exports.deleteReview = deleteReview;
//# sourceMappingURL=reviewController.js.map