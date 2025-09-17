import mongoose, { Document, Schema  } from "mongoose";

export interface FAQ extends Document { 
    question: string,
    answer: string,
}

const FAQSchema: Schema<FAQ> = new Schema({
  question: {type: String, default: ''},
  answer: {type: String, default: ''},
}, { timestamps: true });

const FAQModel = (mongoose.models.FAQ as mongoose.Model<FAQ>)  || mongoose.model<FAQ>("FAQ", FAQSchema);
export default FAQModel;