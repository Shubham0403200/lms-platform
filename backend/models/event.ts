import mongoose, { Document, Schema } from "mongoose";
import { Comment, CommentSchema,  } from "./blog";

export interface IEvent extends Document {
    _id: string | null;
    eventId: string | null;
    thumbnail: {
        public_id: string;
        secure_url: string;
    };
    name: string;
    views?: number;
    creator: string;
    startTime: string;
    endTime: string;
    startDate: Date;
    endDate: Date;
    days: string[];
    link: string[];
    tags: string[];
    slug: string;
    location: string;
    description: string;
    price: number;
    isPublished: boolean;
    mode: string;
    isFree: boolean;
    comments: Comment[];
    createdAt?: Date;
    updatedAt?: Date;
}
  
const eventSchema: Schema<IEvent> = new Schema({
    thumbnail: {
        public_id: { type: String, default: "" },
        secure_url: { type: String, default: "" },
    },
    views: { type: Number, default: 0 },
    slug: { type: String, unique: true, trim: true },
    isPublished: { type: Boolean, default: false },
    name: { type: String, default: "" },
    tags: { type: [String], default: [] },
    creator: { type: String, default: "" },
    startTime: { type: String, default: "" },
    endTime: { type: String, default: "" },
    startDate: { type: Date, default: Date.now },
    endDate: { type: Date, default: Date.now },
    link: { type: [String], default: [] },
    days: { type: [String], default: [] },
    location: { type: String, default: "" },
    description: { type: String, default: "" },
    price: { type: Number, default: 0 },
    mode: { type: String, enum: ['online', 'offline'], default: "offline" },
    isFree: { type: Boolean, default: false },
    comments: [CommentSchema],
}, {timestamps: true})

const EventModel = (mongoose.models.Event as mongoose.Model<IEvent>) || mongoose.model<IEvent>("Event", eventSchema);
export default EventModel;
