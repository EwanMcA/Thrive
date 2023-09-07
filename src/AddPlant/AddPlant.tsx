import React from 'react';

import styles from './AddPlant.module.scss';

type AddPlantProps = {
  onClose: () => void;
};

const AddPlant: React.FC<AddPlantProps> = ({ onClose }) => (
  <div className={styles["modal-overlay"]} >
    <div className={styles["modal"]}>
      <button className={styles["close-button"]} onClick={onClose}>
        X
      </button>
      <input />
    </div>
  </div>
);

export default AddPlant;
