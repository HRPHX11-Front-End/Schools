import React from 'react';
import Row from './chartRow.jsx';
import styles from '../styles.css';

function Chart(props) {

  const listItems = props.schools.map(school => (
    <li key={school._id} className={styles.flexContainer}>
      <Row data={school} setPage={props.setPage} name={school.name} rating={school.rating} details={school.details} studentBody={school.studentBody} reviews={school.reviews} distance={school.distance} />
    </li>
  ))
  return (
    <div>
      <ul>{listItems}</ul>
    </div>
  )
}

export default Chart;
