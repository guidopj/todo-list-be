import { Injectable } from '@nestjs/common';
import { ITodo } from 'domain/entities/todo';
import { TodoRepository } from 'domain/repositories/todo.repository';
import { ErrorTypes } from 'domain/enums/errorTypes';

@Injectable()
export class DeleteTodoUseCase {
  constructor(private readonly todoRepository: TodoRepository) {}

  async execute(todoId: string): Promise<ITodo> {
    const deletedTodo = await this.todoRepository.delete(todoId);

    if (!deletedTodo) {
      throw new Error(ErrorTypes.NO_TODO_TO_DELETE);
    }

    return deletedTodo;
  }
}
