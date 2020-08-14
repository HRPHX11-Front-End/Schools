import React, { useEffect } from 'react';
import styles from './modal.css';
import Reviews from './reviews.jsx';
import { BsX } from "react-icons/bs";
import RatingIcon from '../components/rating_icon.jsx';
import UnderBar from '../components/underbar.jsx';
import StarBar from '../components/five_star.jsx';
import GreatSchoolRating from './GreatSchoolRating.jsx';

class Modal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isShown: false,
    }
  }

  render() {
    const address = this.props.school.data.address.map((info, i) => (
      <div key={i}>
        {info.street + ' '}
        {info.city + ' '}
        {info.state + ' '}
        {info.zip}
      </div>
    ))

    return (
      <div className={styles.Backdrop}>
        <div className={styles.Modal}>
          <BsX className={styles.ModalExit} size={35} onClick={() => { this.props.setPage('main') }} />
          <RatingIcon className={styles.RatingAndName} rating={this.props.school.rating[0].average} />
          <span className={styles.RatingAndName} >{this.props.school.name} </span>
          <span>{address}</span>
          <UnderBar details={this.props.school.details[0]} onModal={true} studentBody={this.props.school.studentBody} />
          <div>{this.props.school.data.studTeachRatio} Students/Teachers</div>
          <div className={styles.blueText} >{this.props.school.data.name}</div>
          <div className={styles.blueText} >{this.props.school.data.district}</div>
          <div><StarBar className={styles.starBar} reviews={this.props.school.reviews} /></div>
          <GreatSchoolRating ratings={this.props.school.data.rating} />
          <div>Last Updated: {this.props.school.data.rating[0].lastUpdated}</div>
          <div>Community Reviews ({this.props.school.reviews.length})</div>
          <Reviews className={styles.Comments} reviews={this.props.school.reviews} />
        </div>
      </div>
    )
  }
}

export default Modal;


