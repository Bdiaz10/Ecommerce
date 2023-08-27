import User from "../models/User";
import {Request, Response} from "express"
import bcrypt from "bcrypt";

// GET functions ----------------------------------
export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.find();
    if(!users){
      return res.status(200).json({messsage: "No Users in DB"})
    }
    return res.status(200).json(users)
  }catch (error) {
    res.status(500).json({messsage: "Error retrieving users"})
  }
 
}

export const getUserById = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const user = await User.findById(id);
    if (!user){
      return res.status(200).json({message: "User not found with id: " + id})
    }
    return res.status(200).json(user)
    

  } catch (error){
    return res.status(500).json({message: "Failed to get user by id"})
  }
}

// POST functions ----------------------------------
export const createUser = async (req: Request, res: Response) => {
  try {
    const email = req.body.email;
    const user = await User.findOne({email: email}); 
    
    if (user) {
      return res.status(200).json({message: "User with email already exists"})
    }else{
      const { password } = req.body;
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new User({...req.body, password: hashedPassword});
      await newUser.save()
      return res.status(201).json({message: "User Created"});
    }
  }catch (error) {
    return res.status(500).json({message: "Failed to Create User"});
  }
}

// DELETE functions ----------------------------------
export const deleteUser = async (req: Request, res: Response) => {
  try {
    const user = await User.findOne({_id: req.params.id});
    if(!user){
      return res.status(500).json({message: "User does not exist to delete"});
    }
    await User.findByIdAndDelete(req.params.id);
    return res.status(200).json({ message: "User deleted successfully" });

  }catch (error) {
    return res.status(500).json({message: "Failed to Delete User"});

  }
} 