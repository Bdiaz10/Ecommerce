import Review from "../models/Review";
import { Request, Response } from "express";

// GET functions ----------------------------------
export const getAllReviews = async (req: Request, res: Response) => {
  try {
    const reviews = await Review.find();
    if(!reviews){
      return res.status(200).json({messsage: "No Reviews in DB"})
    }
    return res.status(200).json(reviews)
  }catch (error) {
    return res.status(500).json({messsage: "Error retrieving reviews"})
  }
 
}

export const getReviewById = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const review = await Review.findById(id);
    if (!review){
      return res.status(404).json({message: "Review not found with id: " + id})
    }
    return res.status(200).json(review)

  } catch (error){
    return res.status(500).json({message: "Failed to get review by id"})
  }
}

// POST functions ----------------------------------
export const createReview = async (req: Request, res: Response) => {
  try {
    const newReview = new Review(req.body);
    await newReview.save();
    return res.status(201).json({message: "Review Created"});
  }catch (error) {
    return res.status(500).json({message: "Failed to Create Review"});
  }
}

// DELETE functions ----------------------------------
export const deleteReview = async (req: Request, res: Response) => {
  try {
    const review = await Review.findOne({_id: req.params.id});
    if(!review){
      return res.status(200).json({message: "Review does not exist to delete"});
    }
    await Review.findByIdAndDelete(req.params.id);
    return res.status(200).json({ message: "Review deleted successfully" });

  }catch (error) {
    return res.status(500).json({message: "Failed to Delete Review"});

  }
} 

