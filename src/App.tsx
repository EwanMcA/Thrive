import React, { useEffect, useState } from 'react';
import AddPlant from './AddPlant';
import PlantCard from './PlantCard';
import Calendar from './Calendar';

import styles from './App.module.scss';

type Plant = {
  name: string;
  lastWatered: string;
}

const App: React.FC = () => {
  const [plants, setPlants] = useState<Plant[]>([]);
  const [showAddPlant, setShowAddPlant] = useState(false);

  useEffect(() => {
    const storedPlants = localStorage.getItem('plants');
    if (storedPlants) {
      try {
        const parsedPlants = JSON.parse(storedPlants);
        setPlants(parsedPlants);
      } catch (error) {
        console.error('Error parsing JSON from local storage:', error);
      }
    }
  }, []);

  const addPlant = () => {
    const newPlant: Plant = {
      name: `New Plant ${plants.length + 1}`,
      lastWatered: new Date().toLocaleDateString(),
    };
    const plantState = [...plants, newPlant];
    setPlants(plantState);
    localStorage.setItem('plants', JSON.stringify(plantState));
    setShowAddPlant(false);
  };

  return (
    <div className={styles.App}>
      <h1 className={styles['page-heading']}>Thrive</h1>
      <div className={styles["plant-list"]}>
        {plants.map((plant, index) => (
          <div className={styles["row"]}>
            <PlantCard key={index} name={plant.name} lastWatered={plant.lastWatered} />
            <Calendar />
          </div>
        ))}
      </div>
      <button className={styles['add-plant-button']} onClick={() => setShowAddPlant(true)}>Add New Plant</button>
      { showAddPlant && (<AddPlant onClose={() => addPlant()} />) }
    </div>
  );
};

export default App;
