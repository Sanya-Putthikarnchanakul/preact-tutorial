import { Todo } from "../types/todo";

export interface TodoRepository {
  getTodos(): Promise<Todo[]>;
}
