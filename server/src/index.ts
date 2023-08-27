import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectMongo from "./config/db";

// load environment variables
dotenv.config();

// create express app
const app = express();
console.log("created express app...");

app.use(cors());
app.use(express.json());

console.log("cors enabled...");

// connect to Mongo DB
connectMongo();

// -- App Routes ------
import userRoutes from "./routes/userRoutes";
import authRoutes from "./routes/authRoutes";
import orderRoutes from "./routes/orderRoutes";
import cartRoutes from "./routes/cartRoutes";
import productRoutes from "./routes/productRoutes";

app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/order', orderRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/product', productRoutes);



app.listen(process.env.PORT || 3001, () => {
  console.log("app is avaible on port: " + "3001");
});
