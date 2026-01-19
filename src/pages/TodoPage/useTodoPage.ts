import { useComputed, useSignal } from "@preact/signals";
import { Todo } from "./Todo";
import { useEffect } from "preact/hooks";
import { ITodoService, TodoService } from "../../services/TodoService";

export const useTodoPage = (todosService: ITodoService = new TodoService()) => {
  const todos = useSignal<Todo[]>([
    { id: 1, title: "Learn Preact", completed: true },
    { id: 2, title: "Build a Todo App", completed: false },
  ]);

  const completedCount = useComputed(() => {
    return todos.value.filter((todo) => todo.completed).length;
  });

  useEffect(() => {
    (async () => {
      try {
        const fetchedTodos = await todosService.fetchTodos();
        todos.value = fetchedTodos;
      } catch (error) {
        console.error("Failed to fetch todos:", error);
      }
    })();
  }, []);

  const addTodo = (title: string) => {
    const newTodo: Todo = {
      id: todos.value.length + 1,
      title,
      completed: false,
    };

    todos.value = [...todos.value, newTodo];
  };

  const removeTodo = (id: number) => {
    todos.value = todos.value.filter((todo) => todo.id !== id);
  };

  return {
    todos,
    completedCount,
    addTodo,
    removeTodo,
  };
};
