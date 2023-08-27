import Cart from "../models/Cart";
import { Request, Response } from "express"

// GET functions ----------------------------------
export const getAllCarts = async (req: Request, res: Response) => {
  try {
    const cart = await Cart.find();
    if(!cart){
      return res.status(200).json({messsage: "No Carts in DB"})
    }
    return res.status(200).json(cart)
  }catch (error) {
    return res.status(500).json({messsage: "Error retrieving carts"})
  }

}

export const getCartById = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const cart = await Cart.findById(id);
    if (!cart){
      return res.status(404).json({message: "Cart not found with id: " + id})
    }
    return res.status(200).json(cart)

  } catch (error){
    return res.status(500).json({message: "Failed to get cart by id"})
  }
}

// POST functions ----------------------------------
export const createCart = async (req: Request, res: Response) => {
  try {
    const newCart = new Cart(req.body);
    await newCart.save();
    return res.status(201).json({message: "Cart Created"});
  }catch (error) {
    return res.status(500).json({message: "Failed to Create Cart"});
  }
}

// DELETE functions ----------------------------------
export const deleteCart = async (req: Request, res: Response) => {
  try {
    const cart = await Cart.findOne({_id: req.params.id});
    if(!cart){
      return res.status(200).json({message: "Cart does not exist to delete"});
    }
    await Cart.findByIdAndDelete(req.params.id);
    return res.status(200).json({ message: "Cart deleted successfully" });

  }catch (error) {
    return res.status(500).json({message: "Failed to Delete Cart"});

  }
} 