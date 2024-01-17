import React from "react";
import { useDispatch } from "react-redux";
import { addHabitStatus } from "../../action";
import styles from "../../styles/home.module.css";
import { GrCheckbox, GrCheckboxSelected } from "react-icons/gr";
import { BsXSquare } from "react-icons/bs";

const ActionButton = (props) => {
  // Destructure habit from props
  const { habit } = props;
  // Get the dispatch function from the Redux store
  const dispatch = useDispatch();

  // Function to handle no status
  const handleNoStatus = () => {
    // Create an object with habit id and empty doneStatus
    const obj = {
      id: habit.id,
      doneStatus: "",
    };
    // Dispatch the action to update habit status
    dispatch(addHabitStatus(obj));
  };

  // Function to handle done status
  const handleDoneStatus = () => {
    // Create an object with habit id and 'done' doneStatus
    const obj = {
      id: habit.id,
      doneStatus: "done",
    };
    // Dispatch the action to update habit status
    dispatch(addHabitStatus(obj));
  };

  // Function to handle not done status
  const handleNotDoneStatus = () => {
    // Create an object with habit id and 'notdone' doneStatus
    const obj = {
      id: habit.id,
      doneStatus: "notdone",
    };
    // Dispatch the action to update habit status
    dispatch(addHabitStatus(obj));
  };

  return (
    <div className={styles.habitCardAction}>
      {/* Display checkbox when doneStatus is empty */}
      {habit.doneStatus === "" && (
        <span className={styles.habitCardCheckIcon}>
          <GrCheckbox onClick={handleDoneStatus} />
        </span>
      )}

      {/* Display checked checkbox when doneStatus is 'done' */}
      {habit.doneStatus === "done" && (
        <span className={styles.habitCardCheckIcon}>
          <GrCheckboxSelected onClick={handleNotDoneStatus} />
        </span>
      )}

      {/* Display X square icon when doneStatus is 'notdone' */}
      {habit.doneStatus === "notdone" && (
        <span className={styles.habitCardCrossIcon}>
          <BsXSquare onClick={handleNoStatus} />
        </span>
      )}
    </div>
  );
};

export default ActionButton;
