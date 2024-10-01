import { IsDate, IsNotEmpty, IsString } from 'class-validator';

export class DeleteTodoHttpDto {
  @IsString()
  @IsNotEmpty()
  todoId: string;
}
