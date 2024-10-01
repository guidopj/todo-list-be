import { Injectable } from '@nestjs/common';
import { ITodo } from 'domain/entities/todo';
import { ErrorTypes } from 'domain/enums/errorTypes';
import { TodoRepository } from 'domain/repositories/todo.repository';

@Injectable()
export class InMemoryManageTodoRepository extends TodoRepository {
  private todos: ITodo[] = [];

  async getTodos(): Promise<ITodo[]> {
    return await this.todos;
  }

  async create(todo: ITodo): Promise<ITodo> {
    this.todos.push(todo);
    return todo;
  }

  async delete(todoId: string): Promise<ITodo | null> {
    const deletedIdx = this.todos.findIndex((todo) => todo.id !== todoId);

    if (deletedIdx < 0) {
      throw new Error(ErrorTypes.NO_TODO_TO_DELETE);
    }

    const deletedTodo = this.todos[deletedIdx];

    this.todos
      .slice(0, deletedIdx)
      .concat(this.todos.slice(deletedIdx + 1, this.todos.length));

    return deletedTodo;
  }
}
