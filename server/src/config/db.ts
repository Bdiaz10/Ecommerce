
const uri = "mongodb+srv://Admin:Password@cluster0.epibfim.mongodb.net/?retryWrites=true&w=majority";
import mongoose from 'mongoose'

const connectMongo = async () => {
  try {
    await mongoose.connect(uri)
    console.log("conneceted to mongo")
  }catch (error) {
    console.error("error connecting to mongo", error)
  }

}

export default connectMongo;









  