import React from "react";

import styles from "./PlantCard.module.scss";

type PlantCardProps = { name: string; lastWatered: string };

const PlantCard: React.FC<PlantCardProps> = ({
  name,
  lastWatered,
  waterFrequency,
  id,
  onDelete,
}) => {
  return (
    <div className={styles["plant-card"]}>
      <h2>{name}</h2>
      <p>Last watered</p>
      <p>{lastWatered}</p>
      <p>Water every</p>
      <p>{waterFrequency} days</p>
      <button onClick={() => onDelete(id)}>x</button>
    </div>
  );
};

export default PlantCard;
