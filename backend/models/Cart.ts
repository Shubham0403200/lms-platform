import mongoose, { Document, Schema } from "mongoose";

export interface CartItem {
  _id?: string;
  courseId?: mongoose.Schema.Types.ObjectId; 
  eventId?: mongoose.Schema.Types.ObjectId;  
  name: string;
  quantity: number;
  label: string;
  price: number;
  originalPrice: number; 
}

export interface Cart extends Document {
  username: string;
  items: CartItem[];
  subTotalPrice: number;
  gstPrice: number; 
  isDiscount: boolean; 
  discountPrice: number; 
  couponCode: string; 
  totalPrice: number; 
}

const CartItemSchema: Schema<CartItem> = new Schema({
  courseId: { type: mongoose.Schema.Types.ObjectId, ref: "Courses" }, 
  eventId: { type: mongoose.Schema.Types.ObjectId, ref: "Events" },   
  name: { type: String, default: '' },
  quantity: { type: Number, default: 0 },
  label: { type: String, default: '' },
  price: { type: Number, default: 0 },
  originalPrice: { type: Number, default: 0, required: true },
});

const CartSchema: Schema<Cart> = new Schema({
    username: { type: String, default: '' },
    items: { type: [CartItemSchema], default: [] },
    subTotalPrice: { type: Number, default: 0 },
    gstPrice: { type: Number, default: 0 },
    isDiscount: { type: Boolean, default: false },
    discountPrice: { type: Number, default: 0 },
    couponCode: { type: String, default: '' },
    totalPrice: { type: Number, default: 0 },
  },
  { timestamps: true }
);

const CartModel = (mongoose.models.Cart as mongoose.Model<Cart>) || mongoose.model<Cart>("Cart", CartSchema);
export default CartModel;
