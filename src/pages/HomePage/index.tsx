import styles from "./HomePage.module.css";

export const HomePage = () => {
  return (
    <div className="container">
      <h3>Home Page</h3>
      <a href="/introduction" className={styles.link}>
        Introduction
      </a>
      <a href="/todos" className={styles.link}>
        Todos
      </a>
      <a href="/try-reducer" className={styles.link}>
        Try Reducer
      </a>
      <a href="/try-custom-hook" className={styles.link}>
        Try Custom Hook
      </a>
      <a href="/try-context" className={styles.link}>
        Try Context
      </a>
    </div>
  );
};
