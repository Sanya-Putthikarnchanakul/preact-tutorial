export interface ITodoService {
  fetchTodos: () => Promise<void>;
}

export class TodoService implements ITodoService {
  async fetchTodos(): Promise<void> {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const response = await fetch("https://jsonplaceholder.typicode.com/todos");

    console.log(response);

    return;
  }
}
