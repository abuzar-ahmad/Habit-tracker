import React from 'react';
import styles from "../../styles/weekly.module.css";

// SingleDay component receives a 'day' prop
const SingleDay = (props) => {
  // Destructure the 'day' prop
  const { day } = props;

  return (
    <div className={styles.singleDate}>
      {/* Display the day */}
      <span>{day.day}</span>{" "}
      {/* You may want to include some content or logic here */}
      <span>{" "}</span>{" "}
    </div>
  );
}

export default SingleDay;
