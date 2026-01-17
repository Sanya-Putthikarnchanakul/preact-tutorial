import { render } from "@testing-library/preact";
import { expect, it, vi } from "vitest";
import { TodosPage } from "../../../src/pages/TodoPage";

vi.mock("../../../src/hooks/useTodos", () => {
  return {
    useTodos: () => ({
      todos: [{ userId: 1, id: 1, title: "Mock todo", completed: false }],
      loading: false,
      error: null,
    }),
  };
});

it("renders todos from API", async () => {
  const { getByText } = render(<TodosPage />);

  expect(getByText("Mock todo")).toBeInTheDocument();
});
