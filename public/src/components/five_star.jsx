import React, { useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';

const StarBar = (props) => {
  console.log('star', props)
  const [state, setStarValue] = useState(props.reviews)
  const [review, setReviewValue] = useState('')

  useEffect(() => {
    var sum = state.map((review) => (
      review.rating
    ))
    .reduce((memo, currentValue) => {
      return (memo + currentValue)
    }, 0)
    setReviewValue(state.length);
    setStarValue(Math.ceil(sum / state.length));
  }, [])

  return (
    <div value={state}>
      {[...Array(5)].map((star, i) => (
        <FaStar key={i} size={20} color={i + 1 <= state ? '#fad700' : '#c2c2c2'}/>
      ))}
      {review}
    </div>
  )
}

export default StarBar;