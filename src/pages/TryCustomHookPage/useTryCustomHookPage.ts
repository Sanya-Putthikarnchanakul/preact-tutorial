import { useState } from "preact/hooks";

export const useTryCustomHookPage = () => {
  const [count, setCount] = useState(0);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const increment = () => {
    setCount((prev) => prev + 1);
    setErrorMessage(null);
  };

  const decrement = () => {
    setCount((prev) => {
      if (prev === 0) {
        setErrorMessage("Count cannot be less than zero.");
        return;
      }

      return prev - 1;
    });
  };

  const reset = () => {
    setCount(0);
    setErrorMessage(null);
  };

  return {
    count,
    errorMessage,
    increment,
    decrement,
    reset,
  };
};
