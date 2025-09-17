import mongoose, { Document, Schema  } from "mongoose";

export interface DailyQuiz extends Document { 
    word: string,
    sentences: string[],
    date: Date,
    link: string[],
    details: string,
}

const DailyQuizSchema: Schema<DailyQuiz> = new Schema({
  word: {type: String, default: ''},
  sentences: {type: [String], default: []},
  date: { type: Date, default: Date.now() }, 
  link: {type: [String], default: []},
  details: {type: String, default: ''},
}, { timestamps: true });

const DailyQuizModel = (mongoose.models.DailyQuiz as mongoose.Model<DailyQuiz>)  || mongoose.model<DailyQuiz>("DailyQuiz", DailyQuizSchema);
export default DailyQuizModel;