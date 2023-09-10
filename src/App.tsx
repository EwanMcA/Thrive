import React, { useEffect, useState } from "react";
import uuid from "react-uuid";

import AddPlant from "./AddPlant";
import PlantCard from "./PlantCard";
import Calendar from "./Calendar";

import styles from "./App.module.scss";

type Plant = {
  name: string;
  lastWatered: string;
};

const App: React.FC = () => {
  const [plants, setPlants] = useState<Plant[]>([]);
  const [showAddPlant, setShowAddPlant] = useState(false);
  const storePlants = (plantState: Plant[]) =>
    localStorage.setItem("plants", JSON.stringify(plantState));

  useEffect(() => {
    const storedPlants = localStorage.getItem("plants");
    if (storedPlants) {
      try {
        const parsedPlants = JSON.parse(storedPlants);
        setPlants(parsedPlants);
      } catch (error) {
        console.error("Error parsing JSON from local storage:", error);
      }
    }
  }, []);

  const addPlant = (name: string, lastWatered: Date, waterFrequency) => {
    const newPlant: Plant = {
      id: uuid(),
      name: name,
      lastWatered: lastWatered,
      waterFrequency: waterFrequency,
    };
    const plantState = [...plants, newPlant];
    setPlants(plantState);
    storePlants(plantState);
    setShowAddPlant(false);
  };

  const deletePlant = (id) => {
    const plantState = plants.filter((plant) => plant.id !== id);
    setPlants(plantState);
    storePlants(plantState);
  };

  const waterPlant = (id) => {
    const plantState = [...plants];
    plantState.find((p) => p.id == id)["lastWatered"] = Date.now();
    setPlants(plantState);
    storePlants(plantState);
  };

  return (
    <div className={styles.App}>
      <h1 className={styles["page-heading"]}>Thrive</h1>
      <div className={styles["plant-list"]}>
        {plants.map((plant, index) => (
          <div key={index} className={styles["row"]}>
            <PlantCard
              name={plant.name}
              lastWatered={plant.lastWatered}
              waterFrequency={plant.waterFrequency}
              id={plant.id}
              onDelete={(id) => deletePlant(id)}
              onWater={(id) => waterPlant(id)}
            />
            <Calendar
              lastWatered={plant.lastWatered}
              waterFrequency={plant.waterFrequency}
            />
          </div>
        ))}
      </div>
      <button
        className={styles["add-plant-button"]}
        onClick={() => setShowAddPlant(true)}
      >
        Add New Plant
      </button>
      {showAddPlant && (
        <AddPlant
          onClose={() => setShowAddPlant(false)}
          onSubmit={(name, lastWatered, waterFrequency) =>
            addPlant(name, lastWatered, waterFrequency)
          }
        />
      )}
    </div>
  );
};

export default App;
