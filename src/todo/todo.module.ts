import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { TodoController } from './todo.controller';

import { todoSchema } from 'infrastructure/schema/todo.schema';
import { CreateTodoUseCase } from 'application/useCases/createTodoUseCase';
import { DeleteTodoUseCase } from 'application/useCases/deleteTodoUseCase';
import { TodoRepository } from 'domain/repositories/todo.repository';
import { WebsocketGateway } from 'infrastructure/websockets/websocket.gateway';
import { MongoTodoService } from 'infrastructure/repositories/mongo/mongoManageTodos';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Todo', schema: todoSchema }])],
  controllers: [TodoController],
  providers: [
    MongoTodoService,
    {
      provide: TodoRepository,
      useExisting: MongoTodoService,
    },
    CreateTodoUseCase,
    DeleteTodoUseCase,
    WebsocketGateway,
  ],
})
export class TodoModule {}
