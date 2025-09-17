import mongoose, { Document, Schema } from "mongoose";

export interface IPurchasedDates extends Document {
    _id: string,
    dates: string, 
    isAttended: boolean,  
    markedBy: string,
    remark: string, 
    status: string,
}

export interface IPurchasedEvent extends Document {
    userId: mongoose.Types.ObjectId;
    email: string;
    isBlocked: boolean, 
    isCompleted: boolean,
    ticketsPurchased: number;
    validFrom: Date;
    validTo: Date;
    attendance: IPurchasedDates[];
    price: number;
    progress: number;
    purchasedDate: Date, 
    paymentMode: string,
}

export interface IUserEvents extends Document {
    eventId: mongoose.Types.ObjectId;
    name: string;
    endTime?: string;
    startTime?: string;
    price: number;
    purchasedEvent: IPurchasedEvent[];
    status: string; 
}

const PurchasedDates: Schema<IPurchasedDates> = new Schema({
    dates: { type: String, default: '' },
    markedBy: { type: String, default: '' },
    isAttended: { type: Boolean, default: false },
    status: { type: String, enum:['Upcoming','Today','Attended','Absent'], default: "Upcoming" },
    remark: { type: String, default: '' },
}, { timestamps: true });

const PurchasedEventSchema: Schema<IPurchasedEvent> = new Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    email: { type: String, default: ''},
    isCompleted: { type: Boolean, default: false },
    isBlocked: { type: Boolean, default: false },
    progress: { type: Number, default: 0 },
    attendance: { type: [PurchasedDates], default: [] },
    ticketsPurchased: { type: Number, default: 0 },
    validFrom: { type: Date, default: Date.now() },
    validTo: { type: Date, default: Date.now() },
    purchasedDate: { type: Date, default: Date.now() },
    price: { type: Number, default: 0 },
    paymentMode: { type: String, enum: ["Cash", "Card","Cheque","RTGS","NEFT","UPI","Net Banking", "Online", 'Free'], default: "" },
}, { timestamps: true });

const UserEventsSchema: Schema<IUserEvents> = new Schema({
    eventId: { type: mongoose.Schema.Types.ObjectId, ref: 'Events'},
    name: { type: String, default: ''},
    price: { type: Number, default: 0},
    purchasedEvent: [PurchasedEventSchema], 
    status: { type: String, enum:['Completed','OnGoing','ForFitted', 'Upcoming'], default: "Upcoming" },

}, { timestamps: true });

const UserEventsModel = (mongoose.models.UserEvents as mongoose.Model<IUserEvents>) || mongoose.model<IUserEvents>("UserEvents", UserEventsSchema);
export default UserEventsModel;
