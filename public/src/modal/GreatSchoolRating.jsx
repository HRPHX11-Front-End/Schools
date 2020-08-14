import React from 'react';

const GreatSchoolRating = (props) => {
  const component = props.ratings.map((rating, i) => (
    <div key={i}>
      <li>{rating.equity}/10 Equity</li>
      <li>{rating.lowIncome}/10 Low Income</li>
      <li>{rating.testScores}/10 Test Scores</li>
      <li>{rating.academicProgress}/10 Academic Progress</li>
    </div>
  ))

  return (
    <div>
      <span>GreatSchoolsRating</span>
      <ul>{component}</ul>
    </div>
  )
}

export default GreatSchoolRating;