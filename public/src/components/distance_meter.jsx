import React from 'react';
import styles from '../styles.css';

const DistanceMeter = (props) => {
  return (
    <div>
      <div className={styles.black}>{props.distance} mi</div>
      <div className={styles.lightGrey}>Distance</div>
    </div>
  )
}

export default DistanceMeter;