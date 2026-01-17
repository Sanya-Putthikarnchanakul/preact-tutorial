import { renderHook, waitFor } from "@testing-library/preact";
import { useTodos } from "../../src/hooks/useTodos";
import { FakeTodoRepository } from "../mocks/fakeTodoRepository";
import { describe, expect, it } from 'vitest';

describe("useTodos (with repository)", () => {
  it("loads todos successfully", async () => {
    const repo = new FakeTodoRepository([
      { userId: 1, id: 1, title: "DI todo", completed: false },
    ]);

    const { result } = renderHook(() => useTodos(repo));

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    expect(result.current.todos).toHaveLength(1);
    expect(result.current.error).toBeNull();
  });

  it("handles error state", async () => {
    const repo = new FakeTodoRepository([], true);

    const { result } = renderHook(() => useTodos(repo));

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    expect(result.current.todos).toEqual([]);
    expect(result.current.error).toBe("Fake error");
  });
});
