import React from 'react';
import Row from './chart_row.jsx';
import styles from '../styles.css';

function Chart(props) {
  const listItems = props.schools.map(school => (
    <li key={school._id}>
      <Row reviews={[...school.reviews]} name={school.name} rating={[...school.rating]} studentBody={school.studentBody} details={school.details} distance={school.distance} />
    </li>
  ))


  return (
    <div className={styles.container}>
      <h2 className={styles.rowTitle}>Schools</h2>
      <ul>{listItems}</ul>
    </div>
  )
}

export default Chart;
/* <RatingIcon rating={school.rating}/> */