import React from "react";
import styles from "../../styles/weekly.module.css";
import ActionDayButton from "./ActionDayButton";
import SingleDay from "./SingleDay";

// WeeklyCard component receives a 'habit' prop and renders habit details along with SingleDay and ActionDayButton components
const WeeklyCard = (props) => {
  // Destructure the 'habit' prop
  const { habit } = props;

  return (
    <div className={styles.weeklyCard}>
      {/* Display the habit title */}
      <div className={styles.habitTitle}>
        <div className={styles.habitName}> {habit.name} </div>
      </div>

      {/* Display the days of the week along with ActionDayButton for each day */}
      <div className={styles.weeklyDate}>
        {/* Map through each day in the habit's weekdays and render SingleDay and ActionDayButton components */}
        {habit.weekdays.map((item, index) => (
          <div className={styles.singleDay} key={index}>
            {/* Render SingleDay component for the day */}
            <SingleDay day={item} />

            {/* Render ActionDayButton component for the day */}
            <ActionDayButton habit={habit} index={index} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeeklyCard;
