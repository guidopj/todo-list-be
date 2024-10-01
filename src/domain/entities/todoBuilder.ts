import { Todo } from './todo';

import { ITodoBuilder } from 'domain/interfaces/IBuilder';
import { ErrorTypes } from 'domain/enums/errorTypes';
import {
  MAX_DESCRIPTION_CHARS_ALLOWED,
  MAX_TITLE_CHARS_ALLOWED,
} from 'domain/constants';

export class TodoBuilder implements ITodoBuilder {
  todo: Todo;

  constructor(ownerId: string) {
    this.todo = new Todo(ownerId);
  }

  withTitle(newTitle: string) {
    if (newTitle.length > MAX_TITLE_CHARS_ALLOWED) {
      throw new Error(ErrorTypes.ERROR_MORE_CHARS_THAN_ALLOWED);
    }
    this.todo.title = newTitle;
    return this;
  }

  withDescription(newDescription: string) {
    if (newDescription.length > MAX_DESCRIPTION_CHARS_ALLOWED) {
      throw new Error(ErrorTypes.ERROR_MORE_CHARS_THAN_ALLOWED);
    }

    this.todo.description = newDescription;
    return this;
  }

  withDeadlineDate(newDeadlineDate: Date) {
    if (newDeadlineDate < new Date()) {
      throw new Error(ErrorTypes.DEADLINE_BEFORE_TODAY);
    }

    this.todo.deadlineDate = newDeadlineDate;
    return this;
  }

  build() {
    return this.todo;
  }
}
