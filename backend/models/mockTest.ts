import mongoose, { Document, Schema, Model } from "mongoose";

export interface IOptions { 
  value: string;
}

export interface IQuestion extends Document {
  questionText: string;
  questionType: "radio" | "checkbox" | "text";
  options: IOptions[];
  correctAnswer: string[];
  explanation: string;
}

export interface ISection extends Document {
  image?: { public_id: string; secure_url: string};
  audio?: { public_id: string; secure_url: string};
  questions: IQuestion[];
}

export interface IModule {
  moduleName: string;
  sections: ISection[];
}

export interface IMockTest extends Document {
  testId?: string;
  title: string;
  price: "free" | "paid";
  description: string;
  details: string[];
  date: Date;
  isPublished: boolean;
  modules: IModule[];
}

const QuestionSchema: Schema<IQuestion> = new Schema<IQuestion>({
  questionText: { type: String, default: "" },
  explanation: { type: String, default: "" },
  questionType: { type: String, enum: ["radio", "checkbox", "text"], default: "radio" },
  options: [String],
  correctAnswer: [String],
}, { timestamps: true });

const SectionSchema: Schema<ISection> = new Schema<ISection>({
  image: { public_id: { type: String, default: '' }, secure_url: { type: String, default: '' }},
  audio: { public_id: { type: String, default: '' }, secure_url: { type: String, default: '' }},
  questions: [QuestionSchema],
}, { timestamps: true });


const ModuleSchema: Schema<IModule> = new Schema<IModule>( {
    moduleName: { type: String, enum: ["Listening", "Reading", "Writing", "Speaking"]},
    sections: [SectionSchema],
},{ timestamps: true });

const MockTestSchema: Schema<IMockTest> = new Schema<IMockTest>({
    title: { type: String, default: ""},
    description: { type: String, default: ""},
    price: { type: String, enum: ["free", "paid"], default: "free" },
    details: { type: [String], default: []},
    date: { type: Date, default: Date.now()},
    isPublished: { type: Boolean, default: false },
    modules: {
      type: [ModuleSchema],
      default: [
        { moduleName: "Listening", sections: [] },
        { moduleName: "Reading", sections: [] },
        { moduleName: "Writing", sections: [] },
        { moduleName: "Speaking", sections: [] },
      ],
    },
}, { timestamps: true });

const MockTestModel: Model<IMockTest> = (mongoose.models.MockTest as Model<IMockTest>) || mongoose.model<IMockTest>("MockTest", MockTestSchema);
export default MockTestModel;
