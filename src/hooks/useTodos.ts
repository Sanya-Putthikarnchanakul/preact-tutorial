import { useEffect, useState } from "preact/hooks";
import { Todo } from "../types/todo";
import { TodoRepository } from "../services/todoRepository";
import { TodoRepositoryImpl } from "../services/todoRepositoryImpl";

const defaultRepo = new TodoRepositoryImpl();

export const useTodos = (repo: TodoRepository = defaultRepo) => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    repo
      .getTodos()
      .then(setTodos)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [repo]);

  return { todos, loading, error };
}
