import React, {useEffect} from 'react';
import styling from './modal.css';
import Reviews from './reviews.jsx';

const Modal = (props) => {
console.log(props)
  return (
    <div className={styling.Modal}>
      <div>{props.data.name}</div>
      <Reviews reviews={props.data.reviews}/>
    </div>
  )
}

export default Modal;