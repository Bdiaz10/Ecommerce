// connect and configure mongo db
// import mongoose from 'mongoose';

// export const connectMongo = (): void => {
//   try {
//     // // connect to mongoose
//     // await mongoose.connect(process.env.MONGODB_URI, {

//     // });
//     console.log('Connected to MongoDB with Typesccipt');
    
//   }catch (e) {
//     console.log("Mongo db connection error: ", e);
   
//     process.exit(1);
//   }
// };

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKxjhQbObiCGYw5WBEULlT8Y3k1BodMnk",
  authDomain: "ecommerce-f1b65.firebaseapp.com",
  projectId: "ecommerce-f1b65",
  storageBucket: "ecommerce-f1b65.appspot.com",
  messagingSenderId: "12013597828",
  appId: "1:12013597828:web:570cdb565179f7d15f3ed1"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);

  