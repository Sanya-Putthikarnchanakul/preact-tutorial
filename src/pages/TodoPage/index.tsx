import { useState } from "preact/hooks";
import styles from "./styles.module.css";

import { useTodoPage } from "./useTodoPage";

export const TodoPage = () => {
  const { todos, completedCount, addTodo, removeTodo } = useTodoPage();
  const [enteredTitle, setEnteredTitle] = useState("");

  const onInput = (e: Event) => {
    const input = e.target as HTMLInputElement;
    setEnteredTitle(input.value);
  };

  return (
    <>
      <div className="container">
        <h3>Todo Page ({completedCount} completed)</h3>

        <div className={styles.inputContainer}>
          <input value={enteredTitle} onInput={onInput} />
          <button
            onClick={() => {
              addTodo(enteredTitle);
              setEnteredTitle("");
            }}
          >
            Add
          </button>
        </div>

        <ul>
          {todos.value.map((todo) => (
            <li>
              <label>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onInput={() => {
                    todo.completed = !todo.completed;
                    todos.value = [...todos.value];
                  }}
                />
                {todo.completed ? <s>{todo.title}</s> : todo.title}
              </label>{" "}
              <button onClick={() => removeTodo(todo.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
