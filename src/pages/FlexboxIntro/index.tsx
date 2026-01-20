import styles from "./style.module.css";

export const FlexboxIntro = () => {
  return (
    <div className={`container ${styles.box1}`}>
      <div className={styles.row1}>Row 1</div>
      <div className={styles.row2}>Row 2</div>
      <div className={styles.row3}>Row 3</div>
    </div>
  );
};
