import Order from "../models/Order";
import { Request, Response } from "express";

// GET functions ----------------------------------
export const getAllOrders = async (req: Request, res: Response) => {
  try {
    const orders = await Order.find();
    if(!orders){
      return res.status(200).json({messsage: "No Orders in DB"})
    }
    return res.status(200).json(orders)
  }catch (error) {
    return res.status(500).json({messsage: "Error retrieving orders"})
  }
 
}

export const getOrderById = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const order = await Order.findById(id);
    if (!order){
      return res.status(404).json({message: "Order not found with id: " + id})
    }
    return res.status(200).json(order)

  } catch (error){
    return res.status(500).json({message: "Failed to get order by id"})
  }
}

// POST functions ----------------------------------
export const createOrder = async (req: Request, res: Response) => {
  try {
    const newOrder = new Order(req.body);
    await newOrder.save();
    return res.status(201).json({message: "Order Created"});
  }catch (error) {
    return res.status(500).json({message: "Failed to Create Order"});
  }
}

// DELETE functions ----------------------------------
export const deleteOrder = async (req: Request, res: Response) => {
  try {
    const order = await Order.findOne({_id: req.params.id});
    if(!order){
      return res.status(200).json({message: "Order does not exist to delete"});
    }
    await Order.findByIdAndDelete(req.params.id);
    return res.status(200).json({ message: "Order deleted successfully" });

  }catch (error) {
    return res.status(500).json({message: "Failed to Delete Order"});

  }
} 

