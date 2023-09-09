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
    onSubmit(plantName, lastWateredDate, wateringFrequency);
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
        <button className={styles["close-button"]} onClick={onClose}>
          X
        </button>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="plantName">Plant Name:</label>
            <input
              type="text"
              id="plantName"
              value={plantName}
              onChange={(e) => setPlantName(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="lastWateredDate">Last Watered Date:</label>
            <input
              type="date"
              id="lastWateredDate"
              value={lastWateredDate}
              onChange={(e) => handleLastWateredChange(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="wateringFrequency">Water every (in days):</label>
            <input
              type="number"
              id="wateringFrequency"
              value={wateringFrequency}
              onChange={(e) => handleFrequencyChange(e.target.value)}
              required
            />
          </div>
          <div>
            <button type="submit">Save</button>
            <button type="button" onClick={() => onClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPlant;
