import React from 'react';

const RatingIcon = (props) => {

  const ratingNum = {
    fontWeight: '600',
    fontSize: '18px'
  }

  const outOfTen = {
    fontSize: '0.75rem'
  }

  const style = {
    backgroundColor: '#f5f5f5',
    font: 'Libre Franklin',
    width: '56px',
    height: '56px',
    textAlign: 'center',
    lineHeight: '56px',
    borderRadius: '50%'
  }

  return (
    <div style={style}>
      <span style={ratingNum}>{props.rating}</span>
      <span style={outOfTen}>/10</span>
    </div>
  )
}

export default RatingIcon;