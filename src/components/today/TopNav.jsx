import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../../styles/topnav.module.css';

const TopNav = () => {
  // Get the current date
  const currentDate = new Date();
  const formattedDate = currentDate.toDateString();

  return (
    <div className={styles.top_Nav}>
      {/* Left navigation elements */}
      <div className={styles.nav_Left}>
        {/* Logo link */}
        <div className={styles.nav_Left_Part}>
          <Link className={styles.decoration_Logo} to='/'> COMMITMENT APP </Link>
        </div>

        {/* Home link */}
        <div className={styles.nav_Left_Part}>
          <Link className={styles.decoration} to='/'> Home </Link>
        </div>

        {/* Weekly link */}
        <div className={styles.nav_Left_Part}>
          <Link className={styles.decoration} to='/weekly'> Weekly View </Link>
        </div>
      </div>

      {/* Right navigation element displaying the current date */}
      <div className={styles.nav_Right_Part}>
        {formattedDate}
      </div>
    </div>
  );
}

export default TopNav;
