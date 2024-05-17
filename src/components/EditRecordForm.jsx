import React, { useState } from "react";
import styles from "./EditRecordForm.module.css";

const EditRecordForm = (props) => {
  const { handleNewData, handleCloseForm } = props;


  const [formData, setFormData] = useState({
    date: new Date(),
    meal: "Breakfast",
    content: "",
    calories: "",
  });

  const handleChangeInput = (e) => {
    setFormData((p) => ({
      ...p,
      [e.target.name]:
        e.target.name == "date" ? new Date(e.target.value) : e.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleNewData((p) => {
      formData.id = p[p.length - 1].id + 1;
      return [...p, formData];
    });

    handleCloseForm();
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label htmlFor="date">Date</label>
      <input
        type="date"
        name="date"
        id="date"
        onChange={handleChangeInput}
        value={formData.date.toISOString().split("T")[0]}
        required
      />
      <label htmlFor="meal">Meal</label>
      <select
        name="meal"
        id="meal"
        onChange={handleChangeInput}
        value={formData.meal}
        required
      >
        <option value="breakfast">Breakfast</option>
        <option value="lunch">Lunch</option>
        <option value="dinner">Dinner</option>
        <option value="snacks">Snacks</option>
      </select>
      <label htmlFor="content">Content</label>
      <input
        type="text"
        name="content"
        id="content"
        onChange={handleChangeInput}
        value={formData.content}
        required
      />
      <label htmlFor="calories">Calories</label>
      <input
        type="number"
        name="calories"
        id="calories"
        onChange={handleChangeInput}
        value={formData.calories}
        required
      />
      <button type="submit" >Submit</button>
      <button
        type="button"
        className={styles.closeBtn}
        onClick={handleCloseForm}
      >
        close
      </button>
    </form>
  );
};

export default EditRecordForm;
