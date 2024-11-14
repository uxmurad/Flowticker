import React, { useState } from "react";
import { LiaAngleDownSolid } from "react-icons/lia";

export const Select = ({ head, data }) => {
  const [active, setActive] = useState(false);
  const [dynamicHead, setdynamicHead] = useState(head);
  return (
    <div
      onClick={() => setActive(!active)}
      className="single d-flex justify-content-between align-items-center position-relative"
    >
      {dynamicHead} <LiaAngleDownSolid />
      <ul
        className={`position-absolute d-flex flex-column justify-content-center ${
          active == true && "show-dropdown"
        }`}
      >
        {data.map((Each) => (
          <li
            style={{ cursor: "pointer" }}
            onClick={() => {
              setdynamicHead(Each);
            }}
          >
            <p>{Each}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
