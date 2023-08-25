import jwt from 'jsonwebtoken'
import {NextFunction} from "express";

const authenticate = (req: any, res: any, next: NextFunction) => {
  const token = req.header("Authorization")?.replace("Bearer ", "");
  if (!token) {
    return res.status(401).json({error: "Authentication Required"});
  }
  try {
    const decoded:any = jwt.verify(token, "secret_key");
    req.userId = decoded.userId;
    next();
  }catch (error){
    res.status(401).json({error: "Invalid Token"})
  }
}

export default authenticate;