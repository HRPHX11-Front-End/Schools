import React, { useState } from 'react';

const UnderBar = (props) => {
  const [onModal, setBoolean] = useState(props.onModal);

  const style = {
    paddingTop: '4px',
    lineHeight: '18px',
    color: '#767676',
    fontSize: '.75rem'
  }

  return (
    onModal ? <div style={style}>
      {props.details.network} • {props.details.grades} • {props.studentBody} Students
    </div> :
      <div style={style}>
        {props.details.network} • {props.details.grades} • {props.details.nearByOrServes}
      </div>
  )
}
export default UnderBar;
