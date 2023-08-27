import Product from "../models/Product";
import {Request, Response} from "express"

// GET functions ----------------------------------
export const getAllProducts = async (req: Request, res: Response) => {
  try {
    const products = await Product.find();
    if(!products){
      return res.status(200).json({messsage: "No Products in DB"})
    }
    return res.status(200).json(products)
  }catch (error) {
    return res.status(500).json({messsage: "Error retrieving products"})
  }
 
}

export const getProductById = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const product = await Product.findById(id);
    if (!product){
      return res.status(404).json({message: "Product not found with id: " + id})
    }
    return res.status(200).json(product)

  } catch (error){
    return res.status(500).json({message: "Failed to get product by id"})
  }
}

// POST functions ----------------------------------
export const createProduct = async (req: Request, res: Response) => {
  try {
    const name = req.body.name;
    const product = await Product.findOne({name: name});
    if(product){
      return res.status(400).json({message: "Product with name already exists"});

    }
    const newProduct = new Product(req.body);
    await newProduct.save();
    return res.status(201).json({message: "Product Created"});
  }catch (error) {
    return res.status(500).json({message: "Failed to Create Product"});
  }
}

// DELETE functions ----------------------------------
export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const product = await Product.findOne({_id: req.params.id});
    if(!product){
      return res.status(404).json({message: "Product does not exist to delete"});
    }
    await Product.findByIdAndDelete(req.params.id);
    return res.status(200).json({ message: "Product deleted successfully" });

  }catch (error) {
    return res.status(500).json({message: "Failed to Delete Product"});

  }
} 