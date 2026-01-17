import styles from "./styles.module.css";

import { useReducer } from "preact/hooks";
import { initialState, reducer } from "./reducer";

export const TryReducerPage = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="container">
      <h3>Try Reducer Page</h3>

      <p>Count: {state.count}</p>

      <p className={styles.errorText}>{state.errorMessage ?? ""}</p>

      <div className={styles.buttonContainer}>
        <button onClick={() => dispatch("decrement")}>Decrement</button>
        <button onClick={() => dispatch("reset")}>Reset</button>
        <button onClick={() => dispatch("increment")}>Increment</button>
      </div>
    </div>
  );
};
