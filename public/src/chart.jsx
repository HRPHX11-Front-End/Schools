import React from 'react';

function Chart(props) {
  console.log(props.schools)
  if (props.schools !== null) {
    const listItems = props.schools.map((school) => {
      <li key={school._id}>
        {school}
      </li>
    })
  }

  return (
  <ul>{listItems}</ul>
  )
}

export default Chart;