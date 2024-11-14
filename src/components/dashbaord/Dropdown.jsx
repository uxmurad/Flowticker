import React, { useState } from "react";

export const Dropdown = ({ setRun, setbackt, setresult, setpublished }) => {
  const [active, setActive] = useState(false);
  return (
    <div className="dropdown-wrapper w-100">
      <button
        onClick={() => setActive(!active)}
        className={`h-[38px] w-100 btn-view ${active && "active-view-btn"}`}
      >
        View
      </button>
      {active && (
        <ul className="list-dropdown">
          <li
            onClick={(e) => {
              setRun(true);
              setActive(false);
            }}
          >
            Run
          </li>
          <li
            onClick={(e) => {
              setbackt(true);
              setActive(false);
            }}
          >
            Backtesting
          </li>
          <li
            onClick={(e) => {
              setresult(true);
              setActive(false);
            }}
          >
            Result
          </li>
          <li
            onClick={(e) => {
              setpublished(true);
              setActive(false);
            }}
          >
            Publish Strategy
          </li>
        </ul>
      )}
    </div>
  );
};
