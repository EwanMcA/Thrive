import React, { useState } from "react";

import styles from "./AddPlant.module.scss";

type AddPlantProps = {
  onClose: () => void;
};

const AddPlant: React.FC<AddPlantProps> = ({ onClose, onSubmit }) => {
  const [plantName, setPlantName] = useState("");
  const [lastWateredDate, setLastWateredDate] = useState("");
  const [wateringFrequency, setWateringFrequency] = useState("7");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(plantName, Date.parse(lastWateredDate), wateringFrequency);
  };

  const handleLastWateredChange = (inputDate) => {
    if (Date.now() > Date.parse(inputDate)) {
      setLastWateredDate(inputDate);
    }
  };

  const handleFrequencyChange = (inputFrequency) => {
    if (inputFrequency > 0) {
      setWateringFrequency(inputFrequency);
    }
  };

  return (
    <div className={styles["modal-overlay"]}>
      <div className={styles["modal"]}>
        <h2>Tell us about your new plant!</h2>
        <button className={styles["close-button"]} onClick={onClose}>
          X
        </button>
        <div className={styles["form-container"]}>
          <form onSubmit={handleSubmit}>
            <label htmlFor="plantName">Name</label>
            <input
              type="text"
              id="plantName"
              value={plantName}
              onChange={(e) => setPlantName(e.target.value)}
              required
            />
            <label htmlFor="lastWateredDate">Last Watered Date</label>
            <input
              type="date"
              id="lastWateredDate"
              value={lastWateredDate}
              onChange={(e) => handleLastWateredChange(e.target.value)}
              required
            />
            <label htmlFor="wateringFrequency">Water every (in days)</label>
            <input
              type="number"
              id="wateringFrequency"
              value={wateringFrequency}
              onChange={(e) => handleFrequencyChange(e.target.value)}
              required
            />
            <button className={styles.save} type="submit">Save</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddPlant;
