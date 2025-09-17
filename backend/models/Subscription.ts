import mongoose, { Document, Schema } from "mongoose";
import { IPurchasedCourse } from "./UserCourses";

export interface SubscriptionDetail extends Document { 
    startDate: Date;
    endDate: Date;
    purchasedDate: Date;
    courses?: IPurchasedCourse[]; 
    subscriptionId?: string;
    title: string;
    price: number;  
    status: string;
    paymentMode: string;
}

export interface Subscription extends Document { 
    userId: mongoose.Schema.Types.ObjectId;
    subscriptionDetails: SubscriptionDetail[];  
}

// SubscriptionDetails schema definition
const SubscriptionDetailSchema: Schema<SubscriptionDetail> = new Schema({
    startDate: { type: Date, default: Date.now() },
    endDate: { type: Date, required: true },  
    purchasedDate: { type: Date, default: Date.now() },
    title: { type: String, default: "" },
    price: { type: Number, default: 0 },  
    status: { type: String, enum: ['Upcoming', 'OnGoing', 'Completed', 'Cancelled'], default: "" }, 
    paymentMode: { type: String, enum: ["Cash", "Card", "Cheque", "RTGS", "NEFT", "UPI", "Net Banking", "Online", 'Free'], default: "" },  
}, { timestamps: true });

// Subscription schema definition
const SubscriptionSchema: Schema<Subscription> = new Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    subscriptionDetails: [SubscriptionDetailSchema],  // Include subscriptionDetails
}, { timestamps: true });

// Export the Subscription model
const SubscriptionModel = mongoose.models.Subscription || mongoose.model<Subscription>("Subscription", SubscriptionSchema);
export default SubscriptionModel;
