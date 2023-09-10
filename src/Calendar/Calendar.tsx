import React, { useState } from "react";

import styles from "./Calendar.module.scss";

const MS_IN_DAY = 1000 * 60 * 60 * 24;

const getBackground = (day, lastWatered, waterFrequency) => {
  const nextWater = lastWatered + waterFrequency * MS_IN_DAY;
  const daysLeft = Math.floor((nextWater - day.getTime()) / MS_IN_DAY);
  if (daysLeft > 0) {
    const gradientHeight = 100 * (daysLeft / waterFrequency);
    return `linear-gradient(0deg, rgb(0,120,255) ${
      gradientHeight - 40
    }%, rgb(255,255,255) ${gradientHeight}%)`;
  }
  return `rgb(255, ${230 + daysLeft * 10}, ${180 + daysLeft * 20})`;
};

const Calendar: React.FC = ({ lastWatered, waterFrequency }) => {
  const [dayRange] = useState(21);
  const currentDate = new Date();
  const limitDate = new Date();
  limitDate.setDate(currentDate.getDate() + dayRange);

  const renderCalendarDays = () => {
    const calendarDays = [];

    for (let day = 0; day < dayRange; day++) {
      const renderDate = new Date();
      renderDate.setDate(currentDate.getDate() + day);
      calendarDays.push(
        <div
          style={{
            background: getBackground(renderDate, lastWatered, waterFrequency),
          }}
          className={styles["calendar-day"]}
          key={day}
        >
          {renderDate.getDate()}
        </div>,
      );
    }

    return calendarDays;
  };

  return (
    <div className={styles["calendar-container"]}>{renderCalendarDays()}</div>
  );
};

export default Calendar;
