import mongoose, { Document, Schema  } from "mongoose";

export interface Career extends Document { 
    name: string,
    email: string,
    workType: string,
    isAccepted: boolean;
    department: string,
    subject: string,
    resume: { 
        public_id: string,
        secure_url: string,
    }
}

const CareerSchema: Schema<Career> = new Schema({
  name: {type: String, default: ''},
  email: {type: String, default: ''},
  workType: {type: String, default: ''},
  department: {type: String, default: ''},
  isAccepted: {type: Boolean, default: false},
  subject: {type: String, default: ''},
  resume: { 
    public_id: {
        type: String,
      },
      secure_url: {
        type: String,
      },  
  }
}, { timestamps: true });

const CareerModel = (mongoose.models.Career as mongoose.Model<Career>)  || mongoose.model<Career>("Career", CareerSchema);
export default CareerModel;