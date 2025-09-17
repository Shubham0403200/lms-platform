import mongoose, { Document, Schema  } from "mongoose";

export interface Contact extends Document { 
    name: string,
    email: string,
    message: string,
}

const ContactSchema: Schema<Contact> = new Schema({
  name: {type: String, default: ''},
  email: {type: String, default: ''},
  message: {type: String, default: ''},
}, { timestamps: true });

const ContactModel = (mongoose.models.Contact as mongoose.Model<Contact>)  || mongoose.model<Contact>("Contact", ContactSchema);
export default ContactModel;