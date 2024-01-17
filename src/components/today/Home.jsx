import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "../../styles/home.module.css";
import { addHabit } from "../../action";
import HabitCard from "./HabitCard";
import { FaPlus } from "react-icons/fa";

const Home = () => {
  // State to manage the input data for adding a new habit
  const [inputData, setInputData] = useState('');

  // Get the habits from the Redux store
  const habits = useSelector((state) => state.habitsReducer);

  // Redux dispatch function
  const dispatch = useDispatch();

  // Function to handle adding a new habit
  const handleAddHabit = () => {
    dispatch(addHabit(inputData));
    // Clear input data after adding a habit
    setInputData('');
  };

  return (
    <div className={styles.container}>
      {/* Display today's date */}
      <div className={styles.todaysDate}>
        {/* Placeholder for today's date */}
      </div>

      {/* Section to add a new habit */}
      <div className={styles.addHabit}>
        {/* Input field for habit name */}
        <input
          type="text"
          placeholder="Add Habit..."
          value={inputData}
          onChange={(e) => setInputData(e.target.value)}
        />
        {/* Button to add a new habit */}
        <FaPlus onClick={handleAddHabit} />
      </div>

      {/* Section to list habits */}
      <div className={styles.listHabit}>
        {/* Map through habits and display HabitCard component for each */}
        {habits.list.map((habit) => (
          <HabitCard habit={habit} key={habit.id} />
        ))}
      </div>
    </div>
  );
};

export default Home;
