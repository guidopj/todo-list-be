import { Document } from 'mongoose';

export interface ITodo extends Document {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly deadlineDate: Date;
  readonly ownerId: string;
  readonly createdAt: Date;
}
