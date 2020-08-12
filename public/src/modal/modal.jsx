import React from 'react';
import styling from './modal.css';

const Modal = (props) => {
  return (
    <div className={styling.Modal}>
      {props.children}
    </div>
  )
}

export default Modal;