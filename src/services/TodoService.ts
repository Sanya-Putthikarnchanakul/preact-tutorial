import { Todo } from "../pages/TodoPage/Todo";

export interface ITodoService {
  fetchTodos: () => Promise<Todo[]>;
}

export class TodoService implements ITodoService {
  async fetchTodos(): Promise<Todo[]> {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");

    if (!response.ok) {
      throw new Error("Failed to fetch todos");
    }

    return response.json();
  }
}
