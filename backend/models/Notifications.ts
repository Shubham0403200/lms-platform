import mongoose, { Document, Schema  } from "mongoose";

export interface Notify {
    _id?: string;
    notificationId?: String; 
    notification: string; 
    status: string; 
    label: string; 
    createdAt?: Date | string;
}

export interface Notifications extends Document { 
    userId: string,
    notifications: Notify[],
}

const NotifySchema: Schema<Notify> = new Schema({
    notification: {type: String, default: ''},
    status: {type: String, enum: ['Read','UnRead'],  default: 'UnRead'},
    label: {type: String, default: ''},
  }, { timestamps: true });
  

const NotificationsSchema: Schema<Notifications> = new Schema({
  userId: {type: String, default: '', ref: "Users"},
  notifications: [NotifySchema],
}, { timestamps: true });

const NotificationsModel = (mongoose.models.Notifications as mongoose.Model<Notifications>)  || mongoose.model<Notifications>("Notifications", NotificationsSchema);
export default NotificationsModel;
