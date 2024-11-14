import React, { useState } from "react";
import backarea from "../../assets/img/back-area.svg";

export const Result = ({ onclick }) => {
  const [active, setactive] = useState(1);
  return (
    <div className="RunStrategy">
      <div className="main-area-run">
        <div className="title-area" style={{ marginBottom: 20 }}>
          <img src={backarea} alt="" onClick={onclick} />
          <h1>Result</h1>
        </div>
        <div className="result-btns">
          <button
            onclick={() => setactive(1)}
            className={`${active == 1 && "active"}`}
          >
            Backtesting
          </button>
          <button
            onclick={() => setactive(2)}
            className={`${active == 2 && "active"}`}
          >
            Live Runs
          </button>
        </div>

        <div className="detail-run">
          <a href="#">View Detailed Run</a>
        </div>
      </div>
    </div>
  );
};
