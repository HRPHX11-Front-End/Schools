import React from 'react';
import StarBar from '../components/five_star.jsx';
import styles from '../styles.css'

const Reviews = (props) => {
  const reviewList = props.reviews.map((review, i) => (
    <div key={i}>
       < StarBar reviews={review.rating}/>
      <div>{review.comment}</div>
      <div>Submitted by a {review.submitter} on {review.date}</div>
    </div>
  ))
  return (
    <div>
     {reviewList}
    </div>
  )
}

export default Reviews;