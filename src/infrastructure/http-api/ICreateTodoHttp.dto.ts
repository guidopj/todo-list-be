import { IsDate, IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CreateTodoHttpDto {
  @IsUUID()
  @IsNotEmpty()
  id: string;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsDate()
  deadlineDate: Date;

  @IsUUID()
  @IsNotEmpty()
  ownerId: string;
}
