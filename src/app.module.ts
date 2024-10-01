import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppService } from 'app.service';
import { AppController } from './app.controller';

import { TodoModule } from './todo/todo.module';

@Module({
  imports: [TodoModule, MongooseModule.forRoot('mongodb://localhost/todolist')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
