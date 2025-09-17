import mongoose, { Document, Schema  } from "mongoose";

export interface NewsLetters extends Document { 
    email: string,
}

const NewsLettersSchema: Schema<NewsLetters> = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
}, { timestamps: true });

const NewsLettersModel = (mongoose.models.NewsLetters as mongoose.Model<NewsLetters>)  || mongoose.model<NewsLetters>("NewsLetters", NewsLettersSchema);
export default NewsLettersModel;