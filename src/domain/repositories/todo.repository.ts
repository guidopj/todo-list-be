import { ITodo } from 'domain/entities/todo';

export abstract class TodoRepository {
  abstract getTodos(): Promise<ITodo[]>;
  abstract create(todo: ITodo): Promise<ITodo>;
  abstract delete(todoId: string): Promise<ITodo | null>;
}
