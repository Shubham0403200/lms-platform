import mongoose, { Document, Schema  } from "mongoose";

export interface Coupon extends Document { 
    couponCode: string; 
    createdBy: string; 
    percentage: number; 
    maxDiscount: number;
    couponLeft: number; 
}

const CouponSchema: Schema<Coupon> = new Schema({
  couponCode: {type: String, default: ''},
  percentage: {type: Number, default: 0},
  couponLeft: {type: Number, default: 0},
  maxDiscount: {type: Number, default: 0},
  createdBy: {type: String, default: '', ref: "User"},
}, { timestamps: true });

const CouponModel = (mongoose.models.Coupon as mongoose.Model<Coupon>)  || mongoose.model<Coupon>("Coupon", CouponSchema);
export default CouponModel;