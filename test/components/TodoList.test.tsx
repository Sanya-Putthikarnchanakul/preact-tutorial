import { render, screen } from "@testing-library/preact";
import { TodoList } from "../../src/components/TodoList";
import { it, expect } from "vitest";

it("renders todo items", () => {
  render(
    <TodoList
      todos={[
        { userId: 1, id: 1, title: "Learn Preact", completed: false },
        { userId: 1, id: 2, title: "Write tests", completed: true },
      ]}
    />,
  );

  expect(screen.getByText("Learn Preact")).toBeInTheDocument();
  expect(screen.getByText("Write tests")).toBeInTheDocument();
});
