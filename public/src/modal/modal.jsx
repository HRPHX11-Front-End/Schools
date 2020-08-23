import React, { useEffect } from 'react';
import styles from './modal.css';
import Reviews from './reviews.jsx';
import { BsX } from "react-icons/bs";
import RatingIcon from '../components/ratingIcon.jsx';
import UnderBar from '../components/underbar.jsx';
import StarBar from '../components/starBar.jsx';
import GreatSchoolRating from './greatSchoolRating.jsx';

class Modal extends React.Component {
  constructor(props) {
    super(props)
    // state is used to conditionally render info on underbar
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
          <BsX tabIndex={0} className={styles.ModalExit} size={35} onClick={() => { this.props.setPage('main') }} />

          <div className={styles.FirstFlex}>
            <RatingIcon className={styles.ratingIcon} rating={this.props.school.rating[0].average} />
            <p className={styles.title} >{this.props.school.name} </p>
          </div>

          <div className={styles.SecondFlex}>
            <div>{address}</div>
            <UnderBar details={this.props.school.details[0]} onModal={true} studentBody={this.props.school.studentBody} />
          </div>

          <div className={styles.StarFlex}>
            <StarBar reviews={this.props.school.reviews} />
            <p className={styles.reviewDisplay}>{`${this.props.school.reviews.length} ${(this.props.school.reviews.length === 1 ? ' review' : ' reviews')}`}</p>
          </div>

          <div className={styles.ThirdFlex}>
            <p>{this.props.school.data.studTeachRatio} Students/Teachers</p>
            <p className={styles.blueText} >{this.props.school.data.name}</p>
            <p className={styles.blueText} >{this.props.school.data.district}</p>
          </div>

          <div className={styles.FourthFlex}>
            <GreatSchoolRating ratings={this.props.school.data.rating} />
            <p className={styles.greyText}>Last Updated: {this.props.school.data.rating[0].lastUpdated}</p>
          </div>

          <p className={styles.title}>Community Reviews ({this.props.school.reviews.length})</p>
          <Reviews className={styles.Comments} reviews={this.props.school.reviews} />

        </div>
      </div>
    )
  }
}

export default Modal;


