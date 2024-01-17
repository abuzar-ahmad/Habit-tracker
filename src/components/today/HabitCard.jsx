import React from "react";
import { useDispatch } from "react-redux";
import { deleteHabit } from "../../action";
import styles from "../../styles/home.module.css";
import ActionButton from "./ActionButton";
import { MdOutlineDeleteOutline } from "react-icons/md";

const HabitCard = (props) => {
  // Destructure habit from props
  const { habit } = props;
  // Set the target number of days for the habit
  var target = 7;
  // Initialize progress counter
  var progress = 0;

  // Loop through weekdays to calculate progress
  for (let i = 0; i < 6; i++) {
    if (habit.weekdays[i].doneStatus === "done") {
      progress++;
    }
  }

  // Get the dispatch function from the Redux store
  const dispatch = useDispatch();

  // Function to handle habit deletion
  const handleDeleteHabit = () => {
    dispatch(deleteHabit(habit.id));
  };

  return (
    <div className={styles.habitCardContainer}>
      <div className={styles.habitCard}>
        <div className={styles.habitCardTitle}>
          {/* Display ActionButton component with habit information */}
          <div className={styles.habitActionName}>
            <span>
              <ActionButton habit={habit} />
            </span>
            {/* Display habit name */}
            <span className={styles.cardName}>
              {`:   ${habit.name}`}
            </span>
          </div>
          {/* Display delete icon with click handler */}
          <div className={styles.deleteIcon}>
            <MdOutlineDeleteOutline onClick={handleDeleteHabit} />
          </div>
        </div>

        {/* Display weekly progress information */}
        <div className={styles.weeklyProgress}>
          <span>Target : {target} days / week</span>
          <span>
            Progress :{progress} / {target}
          </span>
        </div>
      </div>
    </div>
  );
};

export default HabitCard;
