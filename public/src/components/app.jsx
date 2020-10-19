import React, { useState, useEffect } from "react";
import Header from "./header.jsx";
import DropDown from "./dropDown.jsx";
import Chart from "./chart.jsx";
import Modal from "../modal/modal.jsx";
import css from "../styles.css";
import axios from "axios";

const App = (props) => {
  const [page, setPage] = useState("main");
  const [state, setState] = useState({ dataLoaded: false, schoolData: [] });

  useEffect(() => {
    axios
      .get("/schools")
      .then((response) => {
        setState(...state, {
          dataLoaded: true,
          schoolData: response.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function renderPage(data) {
    if (!state.dataLoaded) {
      return <div>Loading...</div>;
    } else if (page === "main") {
      return (
        <div>
          <div className={css.MainFlex}>
            <Header />
            <DropDown />
            <Chart setPage={setPage} schools={state.schoolData} />
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <div className={css.MainFlex}>
            <Header className={css.header} />
            <DropDown />
            <Chart setPage={setPage} schools={state.schoolData} />
          </div>
          <Modal setPage={setPage} school={page} />
        </div>
      );
    }
  }

  return <div>{renderPage()}</div>;
};

export default App;
