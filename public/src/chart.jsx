import React from 'react';

function Chart(props) {
  console.log(props.schools)
    const listItems = props.schools.map(school => (
      <li key={school._id}>
        {school.name}
      </li>
    ))
  return (
  <ul>{listItems}</ul>
  )
}

export default Chart;