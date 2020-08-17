import React from 'react';
import styles from './modal.css';

const GreatSchoolRating = (props) => {
  const component = props.ratings.map((rating, i) => (
    <div key={i}>
      <li><span className={styles.ratingNum}>{rating.equity}</span><span className={styles.outOfTen}>/10 Equity</span></li>
      <li><span className={styles.ratingNum}>{rating.lowIncome}</span><span className={styles.outOfTen}>/10 Low Income</span></li>
      <li><span className={styles.ratingNum}>{rating.testScores}</span><span className={styles.outOfTen}>/10 Test Scores</span></li>
      <li><span className={styles.ratingNum}>{rating.academicProgress}</span><span className={styles.outOfTen}>/10 Academic Progress</span></li>
    </div>
  ))

  return (
    <div>
      <span className={styles.title}>GreatSchoolsRating</span>
      <ul>{component}</ul>
    </div>
  )
}

export default GreatSchoolRating;