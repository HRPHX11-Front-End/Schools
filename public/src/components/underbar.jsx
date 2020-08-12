import React from 'react';

const UnderBar = (props) => {
  const style = {
    paddingTop: '4px',
    lineHeight: '18px',
    color: '#767676',
    fontSize: '.75rem'
  }
  return (
    <div style={style}>
      {props.details.network} • {props.details.grades} • {props.details.nearByOrServes}
    </div>
  )
}
export default UnderBar;