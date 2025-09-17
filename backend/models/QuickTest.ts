import mongoose, { Document, Schema } from "mongoose";

// Interface for QuickTest
export interface QuickTest extends Document { 
    userId: mongoose.Schema.Types.ObjectId; 
    answers: Map<string, string>;  // Map of question IDs to answers
    score: number;
    isCompleted: boolean;
    attemptedAt: Date | null;
}

// Schema definition
const QuickTestSchema: Schema<QuickTest> = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        default: null,
    },
    answers: {
        type: Map,
        of: String,
        default: new Map(),
    },
    score: {
        type: Number,
        default: 0,
    },
    isCompleted: {
        type: Boolean,
        default: false,
    },
    attemptedAt: {
        type: Date,
        default: null,
    },
}, { timestamps: true });

// Model creation
const QuickTestModel = (mongoose.models.QuickTest as mongoose.Model<QuickTest>) || mongoose.model<QuickTest>("QuickTest", QuickTestSchema);
export default QuickTestModel;
