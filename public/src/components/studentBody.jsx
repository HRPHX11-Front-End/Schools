import React from 'react';
import styles from '../styles.css';

const StudentBody = (props) => {

  return (
    <div>
      <div className={styles.black}>{props.studentBody}</div>
      <div className={styles.lightGrey}>Students</div>
    </div>
  )
}

export default StudentBody;