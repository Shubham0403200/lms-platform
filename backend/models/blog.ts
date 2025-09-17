import mongoose, { Document, Schema } from "mongoose";

export interface Comment {
  _id?: string; 
  username: string;
  userImage?: string; 
  comment: string;
  stars: number;
}

export interface IBlog extends Document {
  _id?: string;
  title: string;
  description: string;
  isPublished: boolean;
  writer: string;
  tags: string[];
  message: string;
  slug: string; 
  thumbnail: {
    public_id: string;
    secure_url: string;
  };
  numberOfLikes: number;
  likes: String[];
  numberOfViews: number;
  comments: Comment[];
  createdAt?: Date; 
}

export const CommentSchema: Schema<Comment> = new Schema({
  username: { type: String, default: "" },
  userImage: { type: String, default: "" },
  comment: { type: String, default: "" },
  stars: { type: Number, default: 0 },
}, {  timestamps: true });

const BlogSchema: Schema<IBlog> = new Schema({
    title: { type: String, default: "", trim: true },
    description: { type: String, default: "", trim: true },
    writer: { type: String, default: "", trim: true },
    isPublished: { type: Boolean, default: false },
    slug: { type: String, unique: true, required: true, trim: true },
    message: { type: String, default: "" },
    thumbnail: {
      public_id: { type: String, default: "" },
      secure_url: { type: String, default: "" },
    },
    tags: { type: [String], default: [] },
    numberOfLikes: { type: Number, default: 0 },
    likes: { type: [String], ref: "User", default: [] },
    numberOfViews: { type: Number, default: 0 },
    comments: [CommentSchema],
}, { timestamps: true });

const BlogModel = (mongoose.models.Blog as mongoose.Model<IBlog>) || mongoose.model<IBlog>("Blog", BlogSchema);
export default BlogModel;
