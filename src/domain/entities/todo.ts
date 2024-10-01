import { v4 as uuidv4 } from 'uuid';

export interface ITodo {
  id: string;
  title: string;
  description: string;
  createdAt: Date;
  deadlineDate: Date;
  ownerId: string;
}

export class Todo {
  id: string;
  title: string;
  description: string;
  createdAt: Date;
  deadlineDate: Date;
  ownerId: string;

  constructor(ownerId: string) {
    this.id = uuidv4();
    this.title = '';
    this.description = '';
    this.createdAt = new Date();
    this.deadlineDate = new Date();
    this.ownerId = ownerId;
  }
}
