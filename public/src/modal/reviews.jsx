import React from 'react';

const Reviews = (props) => {

  const reviewList = props.reviews.map((review, i) => (
    <div key={i}>
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