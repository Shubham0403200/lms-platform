import mongoose, { Document, Schema  } from "mongoose";

export interface User extends Document { 
    _id: string;
    email: string,
    password: string,
    mobile: number,
    isVerified: boolean,
    verifyCode: string, 
    isVerifyExpired: Date,
    isBlocked: boolean,
    role: string,
    username: string,
    photo: { 
      public_id: string;
      secure_url: string;  
    }, 
    firstName: string, 
    lastName: string, 
    birthDate: Date,
    isAccepted: boolean,
    resetToken: string;
    address: { 
      country: string; 
      postal_code: number; 
      city: string; 
      state: string; 
      line1: string; 
      line2: string;
    }
}

const UserSchema: Schema<User> = new Schema({
  email: {
    type: String,
    default: "",
    trim: true,
  },
  password: {
    type: String, 
    default: "", 
  },
  mobile: {
    type: Number,
    default: 0,
  },
  isVerified: { 
    type: Boolean, 
    default: false,
  },
  isBlocked: { 
    type: Boolean, 
    default: false,
  },
  verifyCode: { 
    type: String, 
    default: "", 
  }, 
  isVerifyExpired: { 
    type: Date,
    default: Date.now,
  },
  role: { 
    type: String, 
    default: "User",
    enum: ["User", "Admin", "Teacher", "Student", "Developer", "Investor", 'Demo Trainer', 'Sales', 'Video Editor', 'Content Creator'],
  },
  username: {
    type: String,
    default: "",
  },
  photo: {
    public_id: {
      type: String,
      default: "",
    },
    secure_url: {
      type: String,
      default: "",
    },  
  },
  firstName: {
    type: String,
    default: "",
  },
  lastName: {
    type: String,
    default: "",
  },
  resetToken: { type: String, default: ''},
  birthDate: { 
    type: Date, 
    default: Date.now,
  },
  isAccepted: { 
    type: Boolean, 
    default: false, 
  },
  address: { 
    line1: { type: String, default: ''},
    line2: { type: String, default: ''},
    country: { type: String, default: ''},
    state: { type: String, default: ''},
    city: { type: String, default: ''},
    postal_code: { type: Number, default: 0},
  }
}, { timestamps: true });

const UserModel = (mongoose.models.User as mongoose.Model<User>)  || mongoose.model<User>("User", UserSchema);
export default UserModel;
