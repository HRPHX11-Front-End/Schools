import React from 'react';
import styles from '../styles.css';

const Header = (props) => {
  return (
    <div className={styles.Header}>
      <h2 className={styles.headerTitle}>Schools</h2>
      <div className={`${styles.headerSubtitle} ${styles.lightGrey}`}>Great Schools Rating</div>
    </div>
  )
}

export default Header;