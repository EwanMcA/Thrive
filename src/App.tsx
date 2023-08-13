import React, { useState } from 'react';
import PlantCard from './PlantCard';

import styles from './App.module.scss';

const App: React.FC = () => {
  const [plants, setPlants] = useState([
      { name: 'Monstera', lastWatered: '2023-08-10' },
      { name: 'Parlour Palm', lastWatered: '2023-08-12' },
      { name: 'Gerbera', lastWatered: '2023-08-12' },
      { name: 'Pothos (lr)', lastWatered: '2023-08-12' },
      { name: 'Pothos (br)', lastWatered: '2023-08-12' },
  ]);

  const addPlant = () => {
    const newPlant: Plant = {
      name: `New Plant ${plants.length + 1}`,
      lastWatered: new Date().toLocaleDateString(),
    };
    setPlants([...plants, newPlant]);
  };

  return (
    <div className={styles.App}>
      <h1 className={styles['page-heading']}>Thrive</h1>
      <div className={styles["plant-list"]}>
        {plants.map((plant, index) => (
            <PlantCard key={index} name={plant.name} lastWatered={plant.lastWatered} />
        ))}
      </div>
      <button className={styles['add-plant-button']} onClick={addPlant}>Add New Plant</button>
    </div>
  );
};

export default App;
