import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User";

export const register = async (req:any, res:any) => {
  // add to mongo db
  try {
    const {email, password} = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({email, password: hashedPassword});
    await newUser.save()
    res.status(201).json({message: "User Registered"});
  }catch (error) {
    res.status(500).json({message: "Failed to Register"});
  }
}

export const login = async (req: any, res: any) => {
  try {
    const {email, password} = req.body;
    const user = await User.findOne({email});
    if(!user) {
      return res.status(401).json({error: "Invalid Credentials"});
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({error: "Invalid Credentials"});
    }
    const token = jwt.sign({userId: user._id}, 'secret_key');
    res.json({token});
  }catch (error) {
    res.status(500).jsson({error: "Login Failed"});
  }
}

export const logout = (req:any, res: any) => {
  // log out from session
  // return to sign in screen
  res.send("Loggin out!!")
}
