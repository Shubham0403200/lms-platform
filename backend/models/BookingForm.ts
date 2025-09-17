import mongoose, { Document, Schema } from "mongoose";

export interface StudentData {
  username: string;
  targetedBand: string;
  weakness: string;
  strength: string;
  targetedCountry: string;
  email: string;
}

export interface Students extends Document {
  username: string;
  targetedBand: string;
  weakness: string;
  strength: string;
  targetedCountry: string;
  email: string;
}

// Mongoose schema for students
const StudentsSchema: Schema<Students> = new Schema({
  username: {
    type: String,
    default: '',
  },
  targetedBand: {
    type: String,
    default: '',
  },
  weakness: {
    type: String,
    enum: ['listening', 'reading', 'writing', 'speaking'],
    default: 'listening',
  },
  strength: {
    type: String,
    enum: ['listening', 'reading', 'writing', 'speaking'],
    default: 'listening',
  },
  targetedCountry: {
    type: String,
    default: '',
  },
  email: {
    type: String,
    default: '',
  },
}, { timestamps: true });

export interface BookingForm extends Document {
  students: StudentData[]; 
  teacherAssigned: string;
  slotDate: Date;
  slot: string;
  createdAt?: string;
}

const BookingFormSchema: Schema<BookingForm> = new Schema({
  students: [StudentsSchema],
  slotDate: {
    type: Date,
    default: Date.now,
  },
  slot: {
    type: String,
    default: '',
  },
  teacherAssigned: {
    type: String,
    default: '',
  },
}, { timestamps: true });

const BookingFormModel = (mongoose.models.BookingForm as mongoose.Model<BookingForm>) || mongoose.model<BookingForm>("BookingForm", BookingFormSchema);
export default BookingFormModel;
