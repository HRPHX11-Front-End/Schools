import React from 'react';

function Chart(props) {
  console.log(props.schools)
  const listItems = props.schools.map(school => (
    <li key={school._id}>
      {school.name}
    </li>
  ))
  return (
    <ul><h3>Schools</h3>{listItems}</ul>
  )
}

export default Chart;