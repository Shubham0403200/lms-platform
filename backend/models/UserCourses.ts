import mongoose, { Document, Schema } from "mongoose";

export interface IChapter extends Document {
    chapterId: mongoose.Types.ObjectId;
    isWatched: boolean;
    isAnswered: boolean;
    score: number;
}

export interface IPurchasedCourse extends Document {
    userId: mongoose.Types.ObjectId;
    email: string;
    isPurchased: boolean;
    progress: number;
    purchasedDate: Date;
    price: number;
    paymentMode: string;
    chapters: IChapter[];
    isCompleted: boolean;
}

export interface IUserCourses extends Document {
    courseId: mongoose.Types.ObjectId;
    courseName: string;
    coursePrice: number;
    purchasedCourse: IPurchasedCourse[];
}

const ChapterSchema: Schema<IChapter> = new Schema({
    chapterId: { type: mongoose.Schema.Types.ObjectId, ref: 'Chapters'},
    score: { type: Number, default: 0 },
    isWatched: { type: Boolean, default: false },
    isAnswered: { type: Boolean, default: false },
});

const PurchasedCourseSchema: Schema<IPurchasedCourse> = new Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    email: { type: String, default: "" },
    isPurchased: { type: Boolean, default: false },
    purchasedDate: { type: Date, default: Date.now() },
    progress: { type: Number, default: 0 },
    price: { type: Number, default: 0 },
    paymentMode: { type: String, enum: ["Cash", "Card", "Cheque", "RTGS", "NEFT", "UPI", "Net Banking", "Online", 'Free'], default: "" },
    chapters: [ChapterSchema],
    isCompleted: { type: Boolean, default: false },
}, { timestamps: true });

const UserCoursesSchema: Schema<IUserCourses> = new Schema({
    courseId: { type: mongoose.Schema.Types.ObjectId, ref: 'Courses' },
    courseName: { type: String, default: "" },
    coursePrice: { type: Number, default: 0 },
    purchasedCourse: [PurchasedCourseSchema]
}, { timestamps: true });

const UserCoursesModel = (mongoose.models.UserCourses as mongoose.Model<IUserCourses>) || mongoose.model<IUserCourses>("UserCourses", UserCoursesSchema);
export default UserCoursesModel;
