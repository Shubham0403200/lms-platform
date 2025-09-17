import mongoose, { Document, Schema } from "mongoose";

interface OrderItem {
  _id?: string;
  courseId?: mongoose.Schema.Types.ObjectId; 
  eventId?: mongoose.Schema.Types.ObjectId;  
  name: string;
  quantity: number;
  label: string;
  originalPrice: number; 
  price: number;
}

export interface Order extends Document {
  _id: string; 
  firstItemLabel: string;
  userPhoto: { 
    public_id: string;
    secure_url: string;  
  }, 
  orderId: string;
  orderNumber: string;
  userId: mongoose.Types.ObjectId;
  email: string;
  items: OrderItem[];
  subTotalPrice: number;
  gstPrice: number; 
  isDiscount: boolean; 
  discountPrice: number; 
  couponCode: string; 
  totalPrice: number;
  orderDate: Date;
  status: string;
}

const OrderItemSchema: Schema<OrderItem> = new Schema({
  courseId: { type: mongoose.Schema.Types.ObjectId, ref: "Courses" }, 
  eventId: { type: mongoose.Schema.Types.ObjectId, ref: "Events" },   
  name: { type: String, default: '' },
  quantity: { type: Number, default: 0 },
  label: { type: String, default: '' },
  originalPrice: { type: Number, default: 0 },
  price: { type: Number, default: 0 },
});

const OrderSchema: Schema<Order> = new Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    orderNumber: {type: String, default: ''},
    email: { type: String, default: '' },
    items: { type: [OrderItemSchema], default: [] },
    subTotalPrice: { type: Number, default: 0 },
    gstPrice: { type: Number, default: 0 },
    isDiscount: { type: Boolean, default: false },
    discountPrice: { type: Number, default: 0 },
    couponCode: { type: String, default: '' },
    totalPrice: { type: Number, default: 0 },
    orderDate: { type: Date, default: Date.now },
    status: { type: String, enum: ['Ordered','Cancelled'], default: 'Ordered' },  // or 'Completed' depending on your logic
  },
  { timestamps: true }
);

const OrderModel = (mongoose.models.Order as mongoose.Model<Order>) || mongoose.model<Order>("Order", OrderSchema);
export default OrderModel;
