import { TodoRepository } from "../../src/services/todoRepository";
import { Todo } from "../../src/types/todo";

export class FakeTodoRepository implements TodoRepository {
  constructor(
    private readonly result: Todo[] = [],
    private readonly shouldFail = false,
  ) {}

  async getTodos(): Promise<Todo[]> {
    if (this.shouldFail) {
      throw new Error("Fake error");
    }
    return this.result;
  }
}
