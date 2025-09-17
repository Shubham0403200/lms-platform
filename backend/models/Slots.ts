import mongoose, { Document, Schema } from "mongoose";

export interface Slots extends Document {
  date: Date;
  username: string,
  slots: string[],
}

const SlotsSchema: Schema<Slots> = new Schema({
  date: {
    type: Date,
    default: Date.now,
  },
  username: { 
    type: String, 
    default: '',
  },
  slots: {
    type: [String],
    default: [],
  },
}, { timestamps: true });

const SlotsModel = (mongoose.models.Slots as mongoose.Model<Slots>) || mongoose.model<Slots>("Slots", SlotsSchema);
export default SlotsModel;
