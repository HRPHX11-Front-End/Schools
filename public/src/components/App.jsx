import React, { useState, useEffect } from "react";
import Header from "./Header.jsx";
import DropDown from "./DropDown.jsx";
import Chart from "./Chart.jsx";
import Modal from "../modal/Modal.jsx";
import css from "../styles.css";
import axios from "axios";

const App = (props) => {
  const [page, setPage] = useState("main");
  const [state, setState] = useState({ dataLoaded: false, schoolData: [] });

  useEffect(() => {
    axios
      .get("/schools")
      .then(({ data }) => {
        setState({
          ...state,
          dataLoaded: true,
          schoolData: data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const renderView = () => {
    if (!state.dataLoaded) {
      return <div>Loading...</div>;
    } else if (page === "main") {
      return (
        <>
          <div className={css.MainFlex}>
            <Header />
            <DropDown />
            <Chart setPage={setPage} schoolData={state.schoolData} />
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className={css.MainFlex}>
            <Header className={css.header} />
            <DropDown />
            <Chart setPage={setPage} schoolData={state.schoolData} />
          </div>
          <Modal setPage={setPage} school={page} />
        </>
      );
    }
  };

  return <div>{renderView()}</div>;
};

export default App;
