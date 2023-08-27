import express from "express";
const router = express.Router();

import * as controller from "../controllers/reviewController";

// GET ROUTES --------------------------------------------------
router.get("/", controller.getAllReviews);
router.get("/:id", controller.getReviewById);

// POST ROUTES --------------------------------------------------
// authenticate
router.post("/", controller.createReview);

// PATCH ROUTES --------------------------------------------------
router.patch("/");

// DELETE ROUTES --------------------------------------------------
router.delete("/:id", controller.deleteReview)

export default router;