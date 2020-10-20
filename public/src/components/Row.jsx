import React, { useState } from "react";
import RatingIcon from "./RatingIcon.jsx";
import UnderBar from "./Underbar.jsx";
import DistanceMeter from "./DistanceMeter.jsx";
import StarBar from "./StarBar.jsx";
import styles from "../styles.css";
import StudentBody from "./StudentBody.jsx";
import Modal from "../modal/Modal.jsx";

const Row = (props) => {
  const [state, setState] = useState({ showModal: false, schoolInfo: props });

  // 2 sources of truth... passing in props into setPage allows the rendered child componenets to display information based on the props being passed down
  return (
    <div
      className={styles.flexContainer}
      onClick={() => props.setPage(state.schoolInfo)}
    >
      <div className={styles.itemOne}>
        <div className={styles.ratingIcon}>
          <RatingIcon rating={props.rating[0].average} />
        </div>
        <span className={styles.SchoolName}>
          {this.props.name}
          <UnderBar details={props.details[0]} />
        </span>
      </div>
      <div className={styles.itemTwo}>
        <StudentBody
          className={styles.studentBody}
          studentBody={props.studentBody}
        />
      </div>
      <div className={styles.itemTwo}>
        <StarBar reviews={props.reviews} />
        <div className={styles.reviewText}>
          {props.reviews.length}
          {props.reviews.length === 1 ? " review" : " reviews"}
        </div>
      </div>
      <div className={styles.itemTwo}>
        <DistanceMeter
          className={styles.DistanceMeter}
          distance={props.distance}
        />
      </div>
    </div>
  );
};
export default Row;
