import mongoose from "mongoose"

const userModel = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  fName: {
    type: String,
    required: true,
  },
  lName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  role: {
    type: String, // ADMIN, USER
    required: true,
  },
  dateCreated: {
    type: Date,
        default: Date.now,
    required: true,
  },

});

const User = mongoose.model('User', userModel);
export default User;