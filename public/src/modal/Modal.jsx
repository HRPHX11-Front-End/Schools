import React, { useEffect } from "react";
import styles from "./modal.css";
import Reviews from "./Reviews.jsx";
import { BsX } from "react-icons/bs";
import RatingIcon from "../components/RatingIcon.jsx";
import UnderBar from "../components/Underbar.jsx";
import StarBar from "../components/StarBar.jsx";
import GreatSchoolRating from "./GreatSchoolRating.jsx";

const Modal = (props) => {
  const address = props.school.data.address.map((info, index) => (
    <div key={index}>
      {info.street + " "}
      {info.city + " "}
      {info.state + " "}
      {info.zip}
    </div>
  ));
  return (
    <div className={styles.Backdrop}>
      <div className={styles.Modal}>
        <BsX
          tabIndex={0}
          className={styles.ModalExit}
          size={35}
          onClick={() => {
            props.setPage("main");
          }}
        />

        <div className={styles.FirstFlex}>
          <RatingIcon
            className={styles.ratingIcon}
            rating={props.school.rating[0].average}
          />
          <p className={styles.title}>{props.school.name} </p>
        </div>

        <div className={styles.SecondFlex}>
          <div>{address}</div>
          <UnderBar
            details={props.school.details[0]}
            onModal={true}
            studentBody={props.school.studentBody}
          />
        </div>

        <div className={styles.StarFlex}>
          <StarBar reviews={props.school.reviews} />
          <p className={styles.reviewDisplay}>{`${
            props.school.reviews.length
          } ${props.school.reviews.length === 1 ? " review" : " reviews"}`}</p>
        </div>

        <div className={styles.ThirdFlex}>
          <p>{props.school.data.studTeachRatio} Students/Teachers</p>
          <p className={styles.blueText}>{props.school.data.name}</p>
          <p className={styles.blueText}>{props.school.data.district}</p>
        </div>

        <div className={styles.FourthFlex}>
          <GreatSchoolRating ratings={props.school.data.rating} />
          <p className={styles.greyText}>
            Last Updated: {props.school.data.rating[0].lastUpdated}
          </p>
        </div>

        <p className={styles.title}>
          Community Reviews ({props.school.reviews.length})
        </p>
        <Reviews className={styles.Comments} reviews={props.school.reviews} />
      </div>
    </div>
  );
};

export default Modal;
