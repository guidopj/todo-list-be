import { Body, Controller, Delete, Param, Post } from '@nestjs/common';

import { CreateTodoHttpDto } from 'infrastructure/http-api/ICreateTodoHttp.dto';
import { DeleteTodoHttpDto } from 'infrastructure/http-api/IDeleteTodoHttp.dto';

import { CreateTodoUseCase } from 'application/useCases/createTodoUseCase';
import { DeleteTodoUseCase } from 'application/useCases/deleteTodoUseCase';

@Controller('todo')
export class TodoController {
  constructor(
    private createTodoUseCase: CreateTodoUseCase,
    private deleteTodoUseCase: DeleteTodoUseCase,
  ) {}

  @Post()
  async create(@Body() createTodoHttpDto: CreateTodoHttpDto) {
    return await this.createTodoUseCase.execute({
      title: createTodoHttpDto.title,
      description: createTodoHttpDto.description,
      ownerId: createTodoHttpDto.ownerId,
      deadlineDate: createTodoHttpDto.deadlineDate,
    });
  }

  @Delete(':todoId')
  async delete(@Param() params: DeleteTodoHttpDto) {
    const todoId = params.todoId;
    return await this.deleteTodoUseCase.execute(todoId);
  }
}
