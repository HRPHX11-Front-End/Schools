import React from 'react';
import RatingIcon from './rating_icon.jsx';
import UnderBar from './underbar.jsx';
import DistanceMeter from './distance_meter.jsx';
import StarBar from './five_star.jsx';
import styles from '../styles.css';
import StudentBody from './student_body.jsx';
import Modal from '../modal/modal.jsx';

class Row extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showModal: false,
      schoolInfo: this.props
    }
  }

  render() {
    // 2 sources of truth... passing in props into setPage allows the rendered child componenets to display information based on the props being passed down
    return (
      <div className={styles.flexContainer} onClick={() => this.props.setPage(this.state.schoolInfo)}>
        <div className={styles.itemOne} >
          <div className={styles.ratingIcon}>
            <RatingIcon rating={this.props.rating[0].average} />
          </div>
          <span className={styles.SchoolName}>{this.props.name}
            <UnderBar details={this.props.details[0]} />
          </span>
        </div>
        <div className={styles.itemTwo}>
          <StudentBody className={styles.studentBody} studentBody={this.props.studentBody} />
        </div>
        <div className={styles.itemTwo}>
          <StarBar className={styles.starBar} reviews={this.props.reviews} />
        </div>
        <div className={styles.itemTwo}>
          <DistanceMeter className={styles.DistanceMeter} distance={this.props.distance} />
        </div>
      </div>
    )
  }
}
export default Row;

