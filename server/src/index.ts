import express from "express";
import cors from "cors";
import dotenv from "dotenv";
// import { connectMongo } from "./config/db";

// load environment variables
dotenv.config();

// create express app
const app = express();
console.log("created express app...");

app.use(cors());
app.use(express.json());

console.log("cors enabled...");

// connect to Mongo DB
// connectMongo();
console.log("server connected to db");



// -- App Routes ------
import userRoutes from "./routes/userRoutes";
import authRoutes from "./routes/authRoutes";

app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);



app.listen(process.env.PORT || 3001, () => {
  console.log("app is avaible on port: " + "3001");
});
