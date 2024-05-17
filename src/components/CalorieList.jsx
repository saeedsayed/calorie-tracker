import CalorieListItem from "./CalorieListItem";
import styles from "./CalorieList.module.css";

const CalorieList = (props) => {
  const { data } = props;
  return data.length ? (
    <>
      <ul className={styles.calorieList}>
        <li>
          <div>date</div>
          <div>meal</div>
          <div>content</div>
          <div>calories</div>
        </li>
        {data.map((record) => {
          return <CalorieListItem key={record.id} record={record} />;
        })}
        <li>
          <div>total calories</div>
          <div>
            {data.reduce(
              (previous, current) => previous + +current.calories,
              0
            )}
          </div>
        </li>
      </ul>
    </>
  ) : (
    <h2>no data</h2>
  );
};

export default CalorieList;
