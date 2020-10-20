import React from 'react';
import StarBar from '../components/StarBar.jsx';
import styles from './modal.css'

const Reviews = (props) => {
  const reviewList = props.reviews.map((review, index) => (
    <div key={index}>
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