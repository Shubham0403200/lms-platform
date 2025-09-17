import mongoose, { Schema, Document } from 'mongoose';
import { Comment, CommentSchema } from './blog';

export interface IChapterQuiz extends Document { 
  _id: mongoose.Types.ObjectId;
  question: string; 
  questionType: string; 
  options: string[]; 
  answer: string[];
}

export interface IChapter extends Document {
  courseId: mongoose.Types.ObjectId;
  _id: mongoose.Types.ObjectId;
  id?: string;
  video: {
    public_id: string;
    secure_url: string;
    youtube_link: string;
  };
  position: number;
  chapterResources: string[];
  chapterTitle: string;
  description: string;
  isFree: boolean;
  score?: number;
  isWatched?: boolean;
  isAnswered?: boolean;
  isPublished: boolean;
  chapterQuiz: IChapterQuiz[];
  comments: Comment[]; 
}

export interface ICourse extends Document {
  courseId?: string;
  progress?: number;
  title: string;
  description: string;
  slug: string;
  chaptersLength: number;
  courseViews: number;
  numberOfQuiz?: number;
  thumbnail: {
    public_id: string;
    secure_url: string;
  };
  chapters: IChapter[];   
  resources: string[]; 
  price: number;
  difficulty: string;
  category: string;
  details: string[]; 
  courseLength: string; 
  isPublished: boolean;
  tags: string[];
  comments: Comment[];
  createdAt?: Date;
}

const ChapterQuizSchema: Schema<IChapterQuiz> = new Schema({ 
  question: { type: String, default: ''},
  questionType: { type: String, enum: ['radio','checkbox','text'], default: 'radio'},
  options: { type: [String], value: []},
  answer: { type: [String], value: []},
})

const chapterSchema:Schema<IChapter> = new Schema({
  courseId: { type: mongoose.Schema.Types.ObjectId, ref: 'Course' },
  video: {
    public_id: { type: String },
    secure_url: { type: String },
    youtube_link: { type: String, default: "" },
  },
  chapterResources: { type: [String], default: [] },
  position: { type: Number, default: 0 },
  chapterTitle: { type: String, default: "" },
  description: { type: String, default: "" },
  isFree: { type: Boolean, default: false },
  isWatched: { type: Boolean, default: false },
  isAnswered: { type: Boolean, default: false },
  isPublished: { type: Boolean, default: false },
  chapterQuiz: [ChapterQuizSchema], 
}, { timestamps: true });

const CourseSchema:Schema<ICourse> = new Schema({
  slug: { type: String,  required: true, unique: true },
  courseViews: { type: Number, default: 0 }, 
  title: { type: String, default: "" },
  description: { type: String, default: "" },
  details: { type: [String], default: [] },
  courseLength: { type: String, default: '' },
  tags: { type: [String], default: [] },
  chaptersLength: { type: Number, default: 0 },
  thumbnail: {
    public_id: { type: String, default: "" },
    secure_url: { type: String, default: "" },
  },
  chapters: [chapterSchema],
  resources: { type: [String], default: [] },
  price: { type: Number, default: 0 },
  difficulty: { type: String, default: "" },
  category: { type: String, default: "" },
  isPublished: { type: Boolean, default: false },
  comments: [CommentSchema],
}, { timestamps: true });

const CourseModel = (mongoose.models.Courses as mongoose.Model<ICourse>) || mongoose.model<ICourse>("Courses", CourseSchema);
export default CourseModel;
