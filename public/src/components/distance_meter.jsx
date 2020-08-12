import React from 'react';

const DistanceMeter = (props) => {
  return (
    <div>
      <div>{props.distance}</div>
      <div>mi Distance</div>
    </div>
  )
}

export default DistanceMeter;