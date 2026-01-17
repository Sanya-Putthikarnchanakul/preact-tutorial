import { Todo } from "../types/todo";

export const TodoItem = ({ todo }: { todo: Todo }) => {
  return (
    <li>
      <label>
        <input type="checkbox" checked={todo.completed} readOnly />
        {todo.title}
      </label>
    </li>
  );
}
