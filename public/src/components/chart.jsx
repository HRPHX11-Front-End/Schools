import React from 'react';
import Row from './chart_row.jsx';

function Chart(props) {
  console.log(props)
  const listItems = props.schools.map(school => (
    <li key={school._id}>
      <Row reviews={[...school.reviews]} name={school.name} rating={[...school.rating]} details={school.details} distance={school.distance} />
    </li>
  ))


  return (
    <div>
      <h2>Schools</h2>
      {listItems}
    </div>
  )
}

export default Chart;
/* <RatingIcon rating={school.rating}/> */