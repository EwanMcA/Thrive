import React from 'react';

import styles from './App.module.scss';

type PlantCardProps = { name: string; lastWatered: string; }

const PlantCard: React.FC<PlantCardProps> = ({ name, lastWatered }) => {
  return (
    <div className={styles["plant-card"]}>
      <h2>{name}</h2>
      <p>Last watered: {lastWatered}</p>
    </div>
  );
};

export default PlantCard;
