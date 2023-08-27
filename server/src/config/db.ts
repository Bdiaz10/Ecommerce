import mongoose from 'mongoose'

const connectMongo = async () => {
  try {
    const uri = process.env.MONGODB_URI;
    await mongoose.connect(uri)
    console.log("conneceted to mongo")
  }catch (error) {
    console.error("error connecting to mongo", error)
  }
}

export default connectMongo;









  