import React from "react";
import backarea from "../../assets/img/back-area.svg";

export const BackTesting = ({ onclick }) => {
  return (
    <div className="RunStrategy">
      <div className="main-area-run">
        <div className="title-area">
          <img src={backarea} alt="" onClick={onclick} />
          <h1>Backtesting</h1>
        </div>

        <form action="#">
          <div className="input-wrapper">
            <label htmlFor="">Select Broker</label>
            <div className="input-cover">
              <select name="" id="">
                <option value="Select">Select</option>
              </select>
            </div>
          </div>

          <div className="input-wrapper">
            <label htmlFor="">Select date and time</label>
            <div className="input-cover">
              <input type="date" />
            </div>
          </div>
        </form>

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
