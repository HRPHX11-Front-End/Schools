import React, { useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';

const StarBar = (props) => {
  const [state, setStarValue] = useState(props.reviews)

  useEffect(() => {
    var sum = state.map((review) => (
      review.rating
    ))
    .reduce((memo, currentValue) => {
      return (memo + currentValue)
    }, 0)
    setStarValue(Math.ceil(sum / state.length));
  }, [])

  return (
    <div value={state}>
      {[...Array(5)].map((star, i) => (
        <FaStar size={20} color={i + 1 <= state ? '#fad700' : '#c2c2c2'}/>
      ))}
    </div>
  )
}

export default StarBar;