import PageTitle from "../components/PageTitle";
import { GoListUnordered } from "react-icons/go";
import threeDot from "../assets/img/dashboard/threeDot.svg";
import { TfiAngleDown } from "react-icons/tfi";
import { BsThreeDots } from "react-icons/bs";
import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import StrategiesDC from "../components/StrategiesDC";
import Api from "../api/api.js";
import { Dropdown } from "../components/dashbaord/Dropdown.jsx";
import { RunStrategy } from "../components/dashbaord/RunStrategy.jsx";
import { BackTesting } from "../components/dashbaord/BackTesting.jsx";
import { Result } from "../components/dashbaord/Result.jsx";
import { Published } from "../components/dashbaord/Published.jsx";

export default function Strategies() {
  let [strategiesMe, setStrategiesMe] = useState([]);
  let [strategiesSub, setStrategiesSub] = useState([]);

  const profitCard = [
    {
      title: "Strategy Name AI Calculation ",
      des: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint Velit officia.",
      read_more: "Read More",
      create_date: "10",
      live_development: "10",
      // for list views threeDot menu
      menuItem: [{ link: "Setting" }, { link: "Run" }, { link: "Deploy" }],
      // for list views threeDot menu
    },
    {
      title: "Strategy Name AI Calculation ",
      des: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint Velit officia.",
      read_more: "Read More",
      create_date: "10",
      live_development: "10",
      // for list views threeDot menu
      menuItem: [{ link: "Setting" }, { link: "Run" }, { link: "Deploy" }],
      // for list views threeDot menu
    },
    {
      title: "Strategy Name AI Calculation ",
      des: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint Velit officia.",
      read_more: "Read More",
      create_date: "10",
      live_development: "10",
      // for list views threeDot menu
      menuItem: [{ link: "Setting" }, { link: "Run" }, { link: "Deploy" }],
      // for list views threeDot menu
    },
    {
      title: "Strategy Name AI Calculation ",
      des: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint Velit officia.",
      read_more: "Read More",
      create_date: "10",
      live_development: "10",
      // for list views threeDot menu
      menuItem: [{ link: "Setting" }, { link: "Run" }, { link: "Deploy" }],
      // for list views threeDot menu
    },
  ];
  const listHead = [
    {
      name: "Name",
    },
    {
      name: "Info",
    },
    {
      name: "Created",
    },
    {
      name: "Live Dev",
    },
    {
      name: "Tags",
    },
    {
      name: "Action",
    },
  ];
  const [isList, setIsList] = useState(false);
  const [detailsModal, setDetailsModal] = useState(false);

  const [Run, setRun] = useState(false);
  const [backt, setbackt] = useState(false);
  const [result, setresult] = useState(false);
  const [published, setpublished] = useState(false);

  useEffect(() => {
    getStrategies();
  }, []);

  async function getStrategies() {
    try {
      let res = await Api.strategiesMe();
      setStrategiesMe(res?.data?.my_strategies);
      setStrategiesSub(res?.data?.sub_strategies);
    } catch (error) {
      alert("Error while fetching Strategies");
    }
  }

  return (
    <>
      {Run && <RunStrategy onclick={() => setRun(false)} />}
      {backt && <BackTesting onclick={() => setbackt(false)} />}
      {result && <Result onclick={() => setresult(false)} />}
      {published && <Published onclick={() => setpublished(false)} />}

      <PageTitle title="Home" />
      <div className="dashboard-wrap profile">
        <div className="profile-profit strategies bg-white">
          <div className="strategies-header d-flex justify-content-between align-items-center">
            <div className="dashboard-topBar-search  rounded-3 position-relative z-1 ">
              <div className="icon d-flex align-items-center justify-content-center position-absolute top-50 translate-middle-y ms-3">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.75 15.7502L12.4928 12.4929M12.4928 12.4929C13.0499 11.9357 13.4919 11.2743 13.7934 10.5463C14.095 9.81834 14.2502 9.03811 14.2502 8.25015C14.2502 7.4622 14.095 6.68197 13.7934 5.95399C13.4919 5.22602 13.0499 4.56457 12.4928 4.0074C11.9356 3.45024 11.2741 3.00827 10.5462 2.70673C9.81819 2.4052 9.03795 2.25 8.25 2.25C7.46205 2.25 6.68181 2.4052 5.95384 2.70673C5.22587 3.00827 4.56442 3.45024 4.00725 4.0074C2.882 5.13265 2.24985 6.65881 2.24985 8.25015C2.24985 9.84149 2.882 11.3677 4.00725 12.4929C5.1325 13.6182 6.65866 14.2503 8.25 14.2503C9.84134 14.2503 11.3675 13.6182 12.4928 12.4929Z"
                    stroke="#8E8F95"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M15.75 15.7502L12.4928 12.4929M12.4928 12.4929C13.0499 11.9357 13.4919 11.2743 13.7934 10.5463C14.095 9.81834 14.2502 9.03811 14.2502 8.25015C14.2502 7.4622 14.095 6.68197 13.7934 5.95399C13.4919 5.22602 13.0499 4.56457 12.4928 4.0074C11.9356 3.45024 11.2741 3.00827 10.5462 2.70673C9.81819 2.4052 9.03795 2.25 8.25 2.25C7.46205 2.25 6.68181 2.4052 5.95384 2.70673C5.22587 3.00827 4.56442 3.45024 4.00725 4.0074C2.882 5.13265 2.24985 6.65881 2.24985 8.25015C2.24985 9.84149 2.882 11.3677 4.00725 12.4929C5.1325 13.6182 6.65866 14.2503 8.25 14.2503C9.84134 14.2503 11.3675 13.6182 12.4928 12.4929Z"
                    stroke="black"
                    strokeOpacity="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <input
                type="search"
                className="form-control border-0"
                name=""
                id=""
                placeholder="Search"
              />
            </div>
            <div className="strategies-btn d-flex align-items-center">
              <div className="view-btn d-flex">
                <button
                  className={`${isList && "active"}`}
                  onClick={() => setIsList(true)}
                >
                  <GoListUnordered />
                </button>
                <button
                  className={`${!isList && "active"}`}
                  onClick={() => setIsList(false)}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 2.5C1 2.10218 1.15804 1.72064 1.43934 1.43934C1.72064 1.15804 2.10218 1 2.5 1H5.5C5.89782 1 6.27936 1.15804 6.56066 1.43934C6.84196 1.72064 7 2.10218 7 2.5V5.5C7 5.89782 6.84196 6.27936 6.56066 6.56066C6.27936 6.84196 5.89782 7 5.5 7H2.5C2.10218 7 1.72064 6.84196 1.43934 6.56066C1.15804 6.27936 1 5.89782 1 5.5V2.5ZM2.5 2C2.36739 2 2.24021 2.05268 2.14645 2.14645C2.05268 2.24021 2 2.36739 2 2.5V5.5C2 5.63261 2.05268 5.75979 2.14645 5.85355C2.24021 5.94732 2.36739 6 2.5 6H5.5C5.63261 6 5.75979 5.94732 5.85355 5.85355C5.94732 5.75979 6 5.63261 6 5.5V2.5C6 2.36739 5.94732 2.24021 5.85355 2.14645C5.75979 2.05268 5.63261 2 5.5 2H2.5ZM9 2.5C9 2.10218 9.15804 1.72064 9.43934 1.43934C9.72064 1.15804 10.1022 1 10.5 1H13.5C13.8978 1 14.2794 1.15804 14.5607 1.43934C14.842 1.72064 15 2.10218 15 2.5V5.5C15 5.89782 14.842 6.27936 14.5607 6.56066C14.2794 6.84196 13.8978 7 13.5 7H10.5C10.1022 7 9.72064 6.84196 9.43934 6.56066C9.15804 6.27936 9 5.89782 9 5.5V2.5ZM10.5 2C10.3674 2 10.2402 2.05268 10.1464 2.14645C10.0527 2.24021 10 2.36739 10 2.5V5.5C10 5.63261 10.0527 5.75979 10.1464 5.85355C10.2402 5.94732 10.3674 6 10.5 6H13.5C13.6326 6 13.7598 5.94732 13.8536 5.85355C13.9473 5.75979 14 5.63261 14 5.5V2.5C14 2.36739 13.9473 2.24021 13.8536 2.14645C13.7598 2.05268 13.6326 2 13.5 2H10.5ZM1 10.5C1 10.1022 1.15804 9.72064 1.43934 9.43934C1.72064 9.15804 2.10218 9 2.5 9H5.5C5.89782 9 6.27936 9.15804 6.56066 9.43934C6.84196 9.72064 7 10.1022 7 10.5V13.5C7 13.8978 6.84196 14.2794 6.56066 14.5607C6.27936 14.842 5.89782 15 5.5 15H2.5C2.10218 15 1.72064 14.842 1.43934 14.5607C1.15804 14.2794 1 13.8978 1 13.5V10.5ZM2.5 10C2.36739 10 2.24021 10.0527 2.14645 10.1464C2.05268 10.2402 2 10.3674 2 10.5V13.5C2 13.6326 2.05268 13.7598 2.14645 13.8536C2.24021 13.9473 2.36739 14 2.5 14H5.5C5.63261 14 5.75979 13.9473 5.85355 13.8536C5.94732 13.7598 6 13.6326 6 13.5V10.5C6 10.3674 5.94732 10.2402 5.85355 10.1464C5.75979 10.0527 5.63261 10 5.5 10H2.5ZM9 10.5C9 10.1022 9.15804 9.72064 9.43934 9.43934C9.72064 9.15804 10.1022 9 10.5 9H13.5C13.8978 9 14.2794 9.15804 14.5607 9.43934C14.842 9.72064 15 10.1022 15 10.5V13.5C15 13.8978 14.842 14.2794 14.5607 14.5607C14.2794 14.842 13.8978 15 13.5 15H10.5C10.1022 15 9.72064 14.842 9.43934 14.5607C9.15804 14.2794 9 13.8978 9 13.5V10.5ZM10.5 10C10.3674 10 10.2402 10.0527 10.1464 10.1464C10.0527 10.2402 10 10.3674 10 10.5V13.5C10 13.6326 10.0527 13.7598 10.1464 13.8536C10.2402 13.9473 10.3674 14 10.5 14H13.5C13.6326 14 13.7598 13.9473 13.8536 13.8536C13.9473 13.7598 14 13.6326 14 13.5V10.5C14 10.3674 13.9473 10.2402 13.8536 10.1464C13.7598 10.0527 13.6326 10 13.5 10H10.5Z"
                      fill="currentColor"
                    />
                  </svg>
                </button>
              </div>
              <div className="btn-wrap">
                <a href="#" className="btn" id="primaryIcon">
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 13 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 3.625H2.25C1.95163 3.625 1.66548 3.74353 1.4545 3.9545C1.24353 4.16548 1.125 4.45163 1.125 4.75V10.75C1.125 11.0484 1.24353 11.3345 1.4545 11.5455C1.66548 11.7565 1.95163 11.875 2.25 11.875H8.25C8.54837 11.875 8.83452 11.7565 9.04549 11.5455C9.25647 11.3345 9.375 11.0484 9.375 10.75V7"
                      stroke="currentColor"
                      strokeLinecap="round"
                    />
                    <path
                      d="M6.375 6.625L11.148 1.852M7.875 1.375H11.625V5.125"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Export
                </a>
                <Link to="/create-strategies" className="btn bg-primary">
                  <FaPlus /> New Strategy
                </Link>
              </div>
            </div>
          </div>
          {!isList && (
            <div className="grid-view">
              <div className="createdByMe">
                <h3
                  id="title"
                  className="text-heading fs-16 fw-bold lh-base mt-4 mb-3"
                >
                  Created By Me
                </h3>
                <div className="profile-profit-cards d-flex flex-wrap">
                  {strategiesMe?.map((item, index) => (
                    <div className="profile-profit-card bg-white" key={index}>
                      <span className="subTitle fs-12">
                        {item?.is_subscribed == "Y"
                          ? "Subscribed"
                          : "Un Subscribed"}
                      </span>
                      <h4 className="mb-2 pb-1 fs-16 lh-base fw-medium">
                        {item?.strategy_name}
                      </h4>
                      <p className="fs-14 mb-2 pb-2 lh-base">
                        {item?.desc}{" "}
                        <a href="#" className="read fw-semibold">
                          {" "}
                          {item.read_more}
                        </a>
                      </p>
                      <div className="d-flex create">
                        <span className="fs-12 lh-base fw-medium text-heading">
                          Created: {item.create_date} months ago
                        </span>{" "}
                        <span className="fs-12 lh-base fw-medium ">
                          Live development: {item.live_development}
                        </span>
                      </div>
                      <div className="card-btn">
                        <Dropdown
                          setRun={setRun}
                          setbackt={setbackt}
                          setresult={setresult}
                          setpublished={setpublished}
                        />
                        <button
                          id="menu"
                          className="d-flex align-items-center bg-white justify-content-center p-0"
                        >
                          <img src={threeDot} alt="" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="fromMarketplace">
                <h3
                  id="title"
                  className="text-heading fs-16 fw-bold lh-base mb-3"
                >
                  From Marketplace
                </h3>
                <div className="profile-profit-cards d-flex flex-wrap">
                  {strategiesSub?.map((item, index) => (
                    <div className="profile-profit-card bg-white" key={index}>
                      <span className="subTitle fs-12">
                        {item?.is_subscribed == "Y"
                          ? "Subscribed"
                          : "Un Subscribed"}
                      </span>
                      <h4 className="mb-2 pb-1 fs-16 lh-base fw-medium">
                        {item?.strategy_name}
                      </h4>
                      <p className="fs-14 mb-2 pb-2 lh-base">
                        {item?.desc}{" "}
                        <a href="#" className="read fw-semibold">
                          {" "}
                          {item.read_more}
                        </a>
                      </p>
                      <div className="d-flex create">
                        <span className="fs-12 lh-base fw-medium text-heading">
                          Created: {item.create_date} months ago
                        </span>{" "}
                        <span className="fs-12 lh-base fw-medium ">
                          Live development: {item.live_development}
                        </span>
                      </div>
                      <div className="card-btn">
                        <a href="#" className="btn">
                          Run Strategy
                        </a>
                        <button
                          id="menu"
                          className="d-flex align-items-center bg-white justify-content-center p-0"
                        >
                          <img src={threeDot} alt="" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
          {isList && (
            <div className="list-view mt-3 mt-md-4">
              <div className="createdByMe mb-4">
                <h3
                  id="title"
                  className="text-heading fs-16 fw-bold lh-base p-3 m-0 pb-0"
                >
                  Created By Me
                </h3>
                <div className="profile-profit-cards m-0  p-3  lists table w-100">
                  <div className="tr d-flex">
                    {listHead.map((item, index) => (
                      <div
                        className="th d-flex gap-2 align-items-center"
                        key={index}
                      >
                        {item.name}
                        <TfiAngleDown />
                      </div>
                    ))}
                  </div>
                  {profitCard.map((item, index) => (
                    <div
                      className="profile-profit-card lists-list bg-white tr w-100 d-flex align-items-center"
                      key={index}
                    >
                      <div className="td">
                        <h4 className="mb-2 pb-1 fs-6 lh-base fw-medium mr-6">
                          {item.title}
                        </h4>
                      </div>
                      <div className="td">
                        <p className="fs-14 mb-2 pb-2  lh-base mr-6">
                          {item.des}{" "}
                          <button
                            onClick={() => setDetailsModal(!detailsModal)}
                            className="read p-0 bg-transparent border-0 fw-semibold"
                          >
                            {" "}
                            {item.read_more}
                          </button>
                        </p>
                      </div>
                      <div className="td">
                        <span className="fs-6 lh-base  text-heading bg-white">
                          {item.create_date} m Ago
                        </span>
                      </div>
                      <div className="td">
                        <span className="fs-6 lh-base text-heading bg-white">
                          {item.live_development}
                        </span>
                      </div>
                      <div className="td">
                        <span className="subTitle fs-12">Subscribed</span>
                      </div>
                      <div className="td">
                        <button
                          id="menu"
                          className="position-relative d-flex align-items-center bg-white justify-content-center p-0"
                        >
                          <BsThreeDots />
                          <div className="menu-box  position-absolute bg-white z-2  end-0">
                            {item.menuItem.map((item, index) => (
                              <a
                                key={index}
                                href="#"
                                className="menu-item text-start fs-6 fw-semibold lh-base text-heading"
                              >
                                {item.link}
                              </a>
                            ))}
                          </div>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="fromMarketplace">
                <h3
                  id="title"
                  className="text-heading fs-16 fw-bold lh-base p-3 m-0 pb-0"
                >
                  Marketplace
                </h3>
                <div className="profile-profit-cards m-0 p-3  lists table w-100">
                  <div className="tr d-flex">
                    {listHead.map((item, index) => (
                      <div
                        className="th d-flex gap-2 align-items-center"
                        key={index}
                      >
                        {item.name}
                        <TfiAngleDown />
                      </div>
                    ))}
                  </div>
                  {profitCard.map((item, index) => (
                    <div
                      className="profile-profit-card lists-list bg-white tr w-100 d-flex align-items-center"
                      key={index}
                    >
                      <div className="td">
                        <h4 className="mb-2 pb-1 fs-6 lh-base fw-medium mr-6">
                          {item.title}
                        </h4>
                      </div>
                      <div className="td">
                        <p className="fs-14 mb-2 pb-2  lh-base mr-6">
                          {item.des}{" "}
                          <a href="#" className="read fw-semibold">
                            {" "}
                            {item.read_more}
                          </a>
                        </p>
                      </div>
                      <div className="td">
                        <span className="fs-6 lh-base  text-heading bg-white">
                          {item.create_date} m Ago
                        </span>
                      </div>
                      <div className="td">
                        <span className="fs-6 lh-base text-heading bg-white">
                          {item.live_development}
                        </span>
                      </div>
                      <div className="td">
                        <span className="subTitle fs-12">Subscribed</span>
                      </div>
                      <div className="td">
                        <button
                          id="menu"
                          className=" position-relative d-flex align-items-center bg-white justify-content-center p-0"
                        >
                          <BsThreeDots />
                          <div className="menu-box position-absolute bg-white z-2 end-0">
                            {item.menuItem.map((item, index) => (
                              <a
                                key={index}
                                href="#"
                                className="menu-item  text-start fs-6 fw-semibold lh-base text-heading"
                              >
                                {item.link}
                              </a>
                            ))}
                          </div>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      {detailsModal && (
        <div className="strategies-modal d-flex align-items-center justify-content-end p-3 p-md-4 position-fixed top-0 start-0 w-100 z-2 bg-black bg-opacity-20 h-100">
          <div className="login-otp-wrap bg-white py-4 px-3 rounded-4 h-100 ms-auto">
            <div className="login-otp-scroll h-100 px-2 d-flex flex-column overflow-auto">
              <StrategiesDC onClick={() => setDetailsModal(!detailsModal)} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
