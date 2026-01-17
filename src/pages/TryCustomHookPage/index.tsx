import styles from "./styles.module.css";
import { useTryCustomHookPage } from "./useTryCustomHookPage";

export const TryCustomHookPage = () => {
  const {
    count,
    errorMessage,
    increment,
    decrement,
    reset,
  } = useTryCustomHookPage();

  return (
    <div className="container">
      <h3>Try Custom Hook Page</h3>

      <p>Count: {count}</p>

      <p className={styles.errorText}>{errorMessage ?? ""}</p>

      <div className={styles.buttonContainer}>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
        <button onClick={increment}>Increment</button>
      </div>
    </div>
  );
};
