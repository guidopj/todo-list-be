export interface IBuilder {
  build: () => void;
}

export interface ITodoBuilder extends IBuilder {
  withTitle: (title: string) => ITodoBuilder;
  withDescription: (description: string) => ITodoBuilder;
  withDeadlineDate: (deadlineDate: Date) => ITodoBuilder;
}
