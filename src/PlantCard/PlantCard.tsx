import React from "react";

import styles from "./PlantCard.module.scss";

type PlantCardProps = { name: string; lastWatered: string };

const PlantCard: React.FC<PlantCardProps> = ({
  name,
  lastWatered,
  waterFrequency,
  id,
  onDelete,
  onWater,
}) => {
  return (
    <div className={styles["plant-card"]}>
      <h2>{name}</h2>
      <p>
        <u>Last watered</u>
      </p>
      <p>
        {new Date(lastWatered).toLocaleDateString(undefined, {
          weekday: "long",
          month: "long",
          day: "numeric",
        })}
      </p>
      <p>
        <u>Water every</u>
      </p>
      <p>{waterFrequency} days</p>
      <button className={styles.water} onClick={() => onWater(id)}>
        W
      </button>
      <button className={styles.delete} onClick={() => onDelete(id)}>
        x
      </button>
    </div>
  );
};

export default PlantCard;
