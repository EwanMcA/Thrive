import React, { useState } from 'react';

import styles from './Calendar.module.scss';

const Calendar = () => {
  const [ dayRange, setDayRange ] = useState(14);
  const currentDate = new Date();
  const limitDate = new Date();
  limitDate.setDate(currentDate.getDate() + dayRange);

  const renderCalendarDays = () => {
    const calendarDays = [];

    for (let day = 0; day < dayRange * 2; day++) {
      const renderDate = new Date();
      renderDate.setDate(currentDate.getDate() + day);
      calendarDays.push(
        <div className={styles["calendar-day"]} key={day}>
          {renderDate.getDate()}
        </div>
      );
    }

    return calendarDays;
  };

  return (
    <div className={styles["calendar-container"]}>
      {renderCalendarDays()}
    </div>
  );
};

export default Calendar;
