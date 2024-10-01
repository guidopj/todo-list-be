import { Module } from '@nestjs/common';
import { WebsocketGateway } from './websocket.gateway';
import { CreateTodoUseCase } from 'application/useCases/createTodoUseCase';
import { DeleteTodoUseCase } from 'application/useCases/deleteTodoUseCase';

@Module({
  providers: [WebsocketGateway, CreateTodoUseCase, DeleteTodoUseCase],
})
export class WebSocketModule {}
