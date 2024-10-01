import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { CreateTodoHttpDto } from 'infrastructure/http-api/ICreateTodoHttp.dto';

import { ITodo } from 'domain/interfaces/ITodo';
import { TodoRepository } from 'domain/repositories/todo.repository';

export class MongoTodoService extends TodoRepository {
  constructor(@InjectModel('Todo') readonly todoModel: Model<ITodo>) {
    super();
  }

  async getTodos(): Promise<ITodo[]> {
    return this.todoModel.find();
  }

  async create(todoDTO: CreateTodoHttpDto): Promise<ITodo> {
    const createdTodo = await this.todoModel.create(todoDTO);

    return createdTodo.save();
  }

  async delete(todoId: string): Promise<ITodo> {
    return await this.todoModel.findByIdAndDelete(todoId);
  }
}
