import React from "react";
import { useDispatch} from "react-redux";
import { addWeeklyDoneStatus } from "../../action";
import styles from "../../styles/home.module.css";
import { GrCheckbox, GrCheckboxSelected } from "react-icons/gr";
import { BsXSquare } from "react-icons/bs";

// ActionDayButton component receives 'habit' and 'index' as props
const ActionDayButton = (props) => {
  const { habit, index } = props;

  // Access the dispatch function from Redux
  const dispatch = useDispatch();

  // Function to handle no status button click
  const handleNoStatus = () => {
    const obj = {
      id: habit.id,
      doneStatus: "",
      index: index,
    };
    dispatch(addWeeklyDoneStatus(obj));
  };

  // Function to handle done status button click
  const handleDoneStatus = () => {
    const obj = {
      id: habit.id,
      doneStatus: "done",
      index: index,
    };
    dispatch(addWeeklyDoneStatus(obj));
  };

  // Function to handle not done status button click
  const handleNotDoneStatus = () => {
    const obj = {
      id: habit.id,
      doneStatus: "notdone",
      index: index,
    };
    dispatch(addWeeklyDoneStatus(obj));
  };

  return (
    <div className={styles.habitCardAction}>
      {/* Render checkbox icon if doneStatus is empty */}
      {habit.weekdays[index].doneStatus === "" && (
        <span className={styles.habitCardCheckIcon}>
          <GrCheckbox onClick={handleDoneStatus} />
        </span>
      )}

      {/* Render checked checkbox icon if doneStatus is 'done' */}
      {habit.weekdays[index].doneStatus === "done" && (
        <span className={styles.habitCardCheckDoneIcon}>
          <GrCheckboxSelected onClick={handleNotDoneStatus} />
        </span>
      )}

      {/* Render X-square icon if doneStatus is 'notdone' */}
      {habit.weekdays[index].doneStatus === "notdone" && (
        <span className={styles.habitCardCrossIcon}>
          <BsXSquare onClick={handleNoStatus} />
        </span>
      )}
    </div>
  );
};

export default ActionDayButton;
