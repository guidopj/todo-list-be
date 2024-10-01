import { Schema } from 'mongoose';
import { v4 } from 'uuid';

export const todoSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: { type: String, required: true },
  ownerId: { type: Schema.Types.UUID, required: true, default: v4 },
  deadlineDate: {
    type: Date,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
