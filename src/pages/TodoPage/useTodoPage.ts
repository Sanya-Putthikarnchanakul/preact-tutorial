import { computed, signal, useComputed, useSignal } from "@preact/signals";
import { Todo } from "./Todo";
import { useEffect } from "preact/hooks";
import { TodoService } from "../../services/TodoService";

// const todos = signal<Todo[]>([
//   { id: 1, title: "Learn Preact", completed: true },
//   { id: 2, title: "Build a Todo App", completed: false },
// ]);

// const completedCount = computed(() => {
//   return todos.value.filter((todo) => todo.completed).length;
// });

export const useTodoPage = () => {
  const todos = useSignal<Todo[]>([
    { id: 1, title: "Learn Preact", completed: true },
    { id: 2, title: "Build a Todo App", completed: false },
  ]);

  const completedCount = useComputed(() => {
    return todos.value.filter((todo) => todo.completed).length;
  });

  useEffect(() => {
    
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
