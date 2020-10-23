import React from 'react';
import styles from '../styles.css';

// this component is not on modal
const DistanceMeter = (props) => {
  return (
    <div>
      <div className={styles.black}>{props.distance} mi</div>
      <div className={styles.lightGrey}>Distance</div>
    </div>
  )
}

export default DistanceMeter;
