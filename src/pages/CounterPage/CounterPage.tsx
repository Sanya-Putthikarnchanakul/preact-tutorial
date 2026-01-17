import { Counter } from "../../components";
import styles from "./CounterPage.module.css";

export const CounterPage = () => {
  return (
    <div class={styles.container}>
      <h1>Counter Page</h1>
      <Counter initialCount={0} />
    </div>
  );
};
