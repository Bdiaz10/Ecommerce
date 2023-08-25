import mongoose, {Document, Model, Schema} from "mongoose"

enum UserRole {
  ADMIN = "ADMIN",
  USER = "USER"
}

interface UserInterface extends Document {
  id?: number;
  fName?: string;
  lName?: string;
  username?: string;
  email: string;
  password: string;
  role: UserRole; 
  dateCreated: Date;
}

const userModel: Schema<UserInterface> = new mongoose.Schema({
  id: {
    type: Number,
    required: false,
  },
  fName: {
    type: String,
    required: false,
  },
  lName: {
    type: String,
    required: false,
  },
  username: {
    type: String,
    required: false
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: UserRole.USER,
    enum: Object.values(UserRole),
    required: true,
  },
  dateCreated: {
    type: Date,
        default: Date.now(),
    required: true,
  },

});

const User: Model<UserInterface> = mongoose.model('User', userModel);
export default User;