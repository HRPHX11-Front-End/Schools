import React from "react";
import Row from "./Row.jsx";
import styles from "../styles.css";

function Chart({ schoolData, setPage }) {
  const listItems = props.schoolData.map((school) => (
    <li key={school._id} className={styles.flexContainer}>
      <Row
        data={school}
        setPage={setPage}
        name={school.name}
        rating={school.rating}
        details={school.details}
        studentBody={school.studentBody}
        reviews={school.reviews}
        distance={school.distance}
      />
    </li>
  ));
  return (
    <div>
      <ul>{listItems}</ul>
    </div>
  );
}

export default Chart;
