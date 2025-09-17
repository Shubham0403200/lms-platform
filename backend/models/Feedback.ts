import mongoose, { Document, Schema  } from "mongoose";

export interface Feedback extends Document { 
    feedback: string,
    stars: number, 
    role: string,
    isAccepted: boolean, 
    username: string, 
    userImage?: string;
    createdAt: Date;
}

const FeedbackSchema: Schema<Feedback> = new Schema({
  feedback: {type: String, default: ''},
  username: {type: String, default: ''},
  userImage: {type: String, default: ''},
  stars: {type: Number, default: 0},
  isAccepted: {type: Boolean, default: false},
}, { timestamps: true });

const FeedbackModel = (mongoose.models.Feedback as mongoose.Model<Feedback>)  || mongoose.model<Feedback>("Feedback", FeedbackSchema);
export default FeedbackModel;