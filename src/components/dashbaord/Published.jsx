import React, { useState } from "react"; // Import useState here
import backarea from "../../assets/img/back-area.svg";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const Published = ({ onclick }) => {
  const [startDate, setStartDate] = useState(new Date()); // Initialize state

  return (
    <div className="RunStrategy">
      <div className="main-area-run">
        <div className="title-area" style={{ marginBottom: 20 }}>
          <img src={backarea} alt="" onClick={onclick} />
          <h1>Published</h1>
        </div>

        <div style={{ width: "100%" }}>
          <DatePicker
            selected={startDate}
            style={{ width: "100%" }}
            onChange={(date) => setStartDate(date)}
            className="full-width-datepicker"
            inline
          />
        </div>
        <div className="buttons-wrapper-star">
          <button onClick={onclick}>Cancel</button>
          <button className="active" onClick={onclick}>
            Run Backtesting
          </button>
        </div>
      </div>
    </div>
  );
};
