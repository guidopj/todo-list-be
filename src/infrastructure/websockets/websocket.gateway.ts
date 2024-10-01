import { Server, Socket } from 'socket.io';
import {
  ConnectedSocket,
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';

import { CreateTodoUseCase } from 'application/useCases/createTodoUseCase';
import { DeleteTodoUseCase } from 'application/useCases/deleteTodoUseCase';

@WebSocketGateway()
export class WebsocketGateway
  implements OnGatewayConnection, OnGatewayDisconnect
{
  constructor(
    private readonly createTodoUseCase: CreateTodoUseCase,
    private readonly deleteTodoUseCase: DeleteTodoUseCase,
  ) {}

  @WebSocketServer()
  server: Server;

  handleConnection(client: any, ...args: any[]) {
    console.log('client connected ' + client.id);
  }
  handleDisconnect(client: any) {
    console.log('client disconnect ' + client.id);
  }

  @SubscribeMessage('onTodoCreate')
  onCreate(@ConnectedSocket() client: Socket, @MessageBody() data: any) {
    const createdTodo = this.createTodoUseCase.execute(data);

    client.broadcast.emit('onTodoCreate', createdTodo);
  }

  @SubscribeMessage('onTodoDelete')
  onDelete(@ConnectedSocket() client: Socket, @MessageBody() todoId: string) {
    const deletedTodo = this.deleteTodoUseCase.execute(todoId);
    client.broadcast.emit('onTodoDelete', deletedTodo);
  }
}
