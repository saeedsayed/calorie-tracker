import styles from "./CalorieList.module.css"

const CalorieListItem = (props) => {
  const { date, meal, content, calories } = props.record;
  return (
    <li>
      <div className={styles.listItemDate}>
        <span className={styles.listItemDateMonth}>{date.toLocaleDateString("default", { month: "short" })}</span>
        <span className={styles.listItemDateDay}>{date.getDate()}</span>
        <span className={styles.listItemDateYear}>{date.getFullYear()}</span>
      </div>
      <div>{meal}</div>
      <div>{content}</div>
      <div className={styles.listItemCalories}>{calories}</div>
    </li>
  );
};

export default CalorieListItem;
