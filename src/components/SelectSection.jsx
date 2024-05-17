import { useState } from "react";
import CalorieList from "./CalorieList";
import styles from "./selectSection.module.css";

const SelectSection = (props) => {
  const { data } = props;
  const [targetDate, setTargetDate] = useState(new Date());
  const [showAll, setShowAll] = useState(true);

  const handleChange = (e) => {
    setShowAll(false);
    setTargetDate(new Date(e.target.value));
  };

  const filter = (item) =>
    !showAll
      ? item.date.getFullYear() == targetDate.getFullYear() &&
        item.date.getMonth() == targetDate.getMonth() &&
        item.date.getDate() == targetDate.getDate()
      : true;

  return (
    <>
      <form className={styles.selectForm}>
        <label htmlFor="filterField">Select Date:</label>
        <input
          type="date"
          id="filterField"
          onChange={handleChange}
          value={targetDate.toISOString().split("T")[0]}
          className={showAll ? styles.disable : undefined}
        />
        <button type="button" onClick={(_) => setShowAll(p=>!p)}>
          show all date: {showAll ? "yes" : "no"}
        </button>
      </form>
      <CalorieList data={data.filter(filter)} />
    </>
  );
};

export default SelectSection;
