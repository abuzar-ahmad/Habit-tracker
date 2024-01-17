import React from "react";
import { useSelector } from "react-redux";
import styles from '../../styles/weekly.module.css';
import WeeklyCard from "./WeeklyCard";

// Weekly component fetches habits from Redux store and renders WeeklyCard for each habit
const Weekly = () => {
  // Access the habits from the Redux store using useSelector
  const habits = useSelector((state) => state.habitsReducer);

  // Log the habits to the console for debugging or information
  console.log(habits);

  return (
    <div className={styles.container}>
      {/* Map through each habit in the habits list and render a WeeklyCard component */}
      {habits.list.map((habit, index) => (
        <WeeklyCard habit={habit} key={index} />
      ))}
    </div>
  );
};

export default Weekly;
