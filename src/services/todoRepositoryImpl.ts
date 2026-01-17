import { TodoRepository } from './todoRepository';
import { Todo } from '../types/todo';

export class TodoRepositoryImpl implements TodoRepository {
  async getTodos(): Promise<Todo[]> {
    const res = await fetch(
      'https://jsonplaceholder.typicode.com/todos'
    );

    if (!res.ok) {
      throw new Error('Failed to fetch todos');
    }

    return res.json();
  }
}
