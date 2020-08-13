import React, { useState, useEffect } from 'react';
import RatingIcon from './rating_icon.jsx';
import UnderBar from './underbar.jsx';
import DistanceMeter from './distance_meter.jsx';
import StarBar from './five_star.jsx';
import styles from '../styles.css';
import StudentBody from './student_body.jsx';
import Modal from '../modal/modal.jsx';

const Row = (props) => {
  const [modalData, setModalData] = useState(props);
  const [showModal, toggleModal] = useState(false);

  const title = {
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    color: '#1080a2',
    cursor: 'pointer',
    fontSize: '1rem',
    font: 'Libre Franklin',
  }

  useEffect(()=> {

  }, [showModal]);

  // const setPage = () => {

  // }

  return (showModal ? <Modal data={modalData} /> :
    <div className={styles.container} onClick={()=> (toggleModal(!showModal))}>
      <div className={styles.itemOne} >
        <div className={styles.ratingIcon}>
          <RatingIcon rating={props.rating[0].average} />
        </div>
        <span style={title}>{props.name}
          <UnderBar details={props.details[0]} />
        </span>
      </div>
      <div className={styles.itemTwo}>
        <StudentBody className={styles.studentBody} studentBody={props.studentBody} />
      </div>
      <div className={styles.itemTwo}>
        <StarBar className={styles.starBar} reviews={props.reviews} />
      </div>
      <div className={styles.itemTwo}>
        <DistanceMeter className={styles.DistanceMeter} distance={props.distance} />
      </div>
    </div>
  )
}

export default Row;

