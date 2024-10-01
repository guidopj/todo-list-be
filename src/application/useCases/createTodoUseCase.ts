import { Injectable } from '@nestjs/common';
import { ICreateTodoDto } from 'application/dtos/createTodoDto';
import { ITodo } from 'domain/entities/todo';
import { TodoBuilder } from 'domain/entities/todoBuilder';
import { TodoRepository } from 'domain/repositories/todo.repository';

@Injectable()
export class CreateTodoUseCase {
  constructor(private readonly todoRepository: TodoRepository) {}

  async execute(todo: ICreateTodoDto): Promise<ITodo> {
    const newBuilder = new TodoBuilder(todo.ownerId);

    const newTodo = newBuilder
      .withTitle(todo.title)
      .withDescription(todo.description)
      .withDeadlineDate(todo.deadlineDate)
      .build();

    await this.todoRepository.create(newTodo);

    return newTodo;
  }
}
