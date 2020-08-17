import React, { useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';
import styles from '../styles.css'

const StarBar = (props) => {

  const [state, setStarValue] = useState(props.reviews);
  const [review, setReviewValue] = useState('');
  const [renderComment, setRenderComment] = useState(false);


  useEffect(() => {
    if (Array.isArray(state)) {
      var sum = state.map((review) => (
        review.rating
      ))
        .reduce((memo, currentValue) => {
          return (memo + currentValue)
        }, 0)
      setReviewValue(state.length);
      setRenderComment(true);
      setStarValue(Math.ceil(sum / state.length));
    }
  }, []);

  // props.reviews will only be an array on the main page, on the Modal this will be a single value allowing me to render the page conditionally on this assumption

  return (
    <div value={state}>
      {[...Array(5)].map((star, i) => (
        <FaStar key={i} size={20} color={i + 1 <= state ? '#fad700' : '#c2c2c2'} />
      ))}
    </div>
  )
}

export default StarBar;