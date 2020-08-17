import React from 'react';
import StarBar from '../components/five_star.jsx';
import styles from './modal.css'

const Reviews = (props) => {
  const reviewList = props.reviews.map((review, i) => (
    <div key={i}>
      <StarBar reviews={review.rating} />
      <div>{review.comment}</div>
      <p className={styles.greyText}>Submitted by a {review.submitter} on {review.date}</p>
    </div>
  ))
  return (
    <div>
      {reviewList}
    </div>
  )
}

export default Reviews;