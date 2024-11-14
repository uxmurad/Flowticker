import { useState } from "react";
import { LiaAngleDownSolid } from "react-icons/lia";
import plus from "../assets/img/plus.svg";

export const DropdownCreate = ({ item, index, decision }) => {
  const [active, setActive] = useState(false);

  const handleDragStart = (event, localItem) => {
    let data = {
      head: item.key,
      ...localItem,
    };
    event.dataTransfer.setData("application/json", JSON.stringify(data));
  };

  return (
    <div
      onClick={() => setActive(!active)}
      className={`single ${
        active === false && "not-active-dropdown-strategies"
      }`}
      key={index}
    >
      <div className="it d-flex justify-content-between align-items-center">
        {item.title} <LiaAngleDownSolid />
      </div>

      <div className="dashboard-topBar-search bg-white rounded-3 position-relative z-1 d-none d-md-block">
        <div className="icon d-flex align-items-center ms-3">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.75 15.7502L12.4928 12.4929M12.4928 12.4929C13.0499 11.9357 13.4919 11.2743 13.7934 10.5463C14.095 9.81834 14.2502 9.03811 14.2502 8.25015C14.2502 7.4622 14.095 6.68197 13.7934 5.95399C13.4919 5.22602 13.0499 4.56457 12.4928 4.0074C11.9356 3.45024 11.2741 3.00827 10.5462 2.70673C9.81819 2.4052 9.03795 2.25 8.25 2.25C7.46205 2.25 6.68181 2.4052 5.95384 2.70673C5.22587 3.00827 4.56442 3.45024 4.00725 4.0074C2.882 5.13265 2.24985 6.65881 2.24985 8.25015C2.24985 9.84149 2.882 11.3677 4.00725 12.4929C5.1325 13.6182 6.65866 14.2503 8.25 14.2503C9.84134 14.2503 11.3675 13.6182 12.4928 12.4929Z"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M15.75 15.7502L12.4928 12.4929M12.4928 12.4929C13.0499 11.9357 13.4919 11.2743 13.7934 10.5463C14.095 9.81834 14.2502 9.03811 14.2502 8.25015C14.2502 7.4622 14.095 6.68197 13.7934 5.95399C13.4919 5.22602 13.0499 4.56457 12.4928 4.0074C11.9356 3.45024 11.2741 3.00827 10.5462 2.70673C9.81819 2.4052 9.03795 2.25 8.25 2.25C7.46205 2.25 6.68181 2.4052 5.95384 2.70673C5.22587 3.00827 4.56442 3.45024 4.00725 4.0074C2.882 5.13265 2.24985 6.65881 2.24985 8.25015C2.24985 9.84149 2.882 11.3677 4.00725 12.4929C5.1325 13.6182 6.65866 14.2503 8.25 14.2503C9.84134 14.2503 11.3675 13.6182 12.4928 12.4929Z"
              stroke="currentColor"
              strokeOpacity="0.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
          <input
            type="search"
            placeholder="Search"
            className="form-control border-0 bg-transparent"
          />
        </div>
      </div>

      {decision?.decitionData?.[item.key]?.map((subItem, subIndex) => (
        <div
          className="action-item d-flex align-items-center justify-content-between"
          key={subIndex}
          draggable
          onDragStart={(e) => handleDragStart(e, subItem)}
        >
          <p dangerouslySetInnerHTML={{ __html: subItem.value }}></p>
          <img src={plus} alt="plus icon" />
        </div>
      ))}
    </div>
  );
};
