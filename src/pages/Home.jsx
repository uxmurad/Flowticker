import { useEffect, useState } from "react";
import PageTitle from "../components/PageTitle";
import BarChart from "../components/dashbaord/BarChart";
import banner from "../assets/img/dashboard/banner-img.png";
import calendar from "../assets/img/dashboard/calendar.svg";
import threeDot from "../assets/img/dashboard/threeDot.svg";
import listIcon_1 from "../assets/img/dashboard/graph-list-icon-1.svg";
import listIcon_2 from "../assets/img/dashboard/graph-list-icon-2.svg";
import listIcon_3 from "../assets/img/dashboard/graph-list-icon-3.svg";
import { Link } from "react-router-dom";
import TaskList from "../components/dashbaord/TaskList";
import Api from "../api/api";

export default function Home() {
  const [metrics, setMatrics] = useState(null);
  const [profitS, setProfitS] = useState([]);

  const graphList = [
    {
      color: "#4DD5B8",
      title: "Profit",
      num: "45%",
      icon: listIcon_1,
    },
    {
      color: "#FF823C",
      title: "Winning streak",
      num: "12",
      icon: listIcon_2,
    },
    {
      color: "#FFC833",
      title: "No. of days actively traded.",
      num: "12",
      icon: listIcon_3,
    },
  ];

  // eslint-disable-next-line no-unused-vars
  const profitCard = [
    {
      title: "Strategy Name AI Calculation ",
      des: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint Velit officia.",
    },
    {
      title: "Strategy Name AI Calculation ",
      des: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint Velit officia.",
    },
    {
      title: "Strategy Name AI Calculation ",
      des: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint Velit officia.",
    },
    {
      title: "Strategy Name AI Calculation ",
      des: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint Velit officia.",
    },
    {
      title: "Strategy Name AI Calculation ",
      des: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint Velit officia.",
    },
    {
      title: "Strategy Name AI Calculation ",
      des: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint Velit officia.",
    },
    {
      title: "Strategy Name AI Calculation ",
      des: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint Velit officia.",
    },
    {
      title: "Strategy Name AI Calculation ",
      des: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint Velit officia.",
    },
    {
      title: "Strategy Name AI Calculation ",
      des: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint Velit officia.",
    },
    {
      title: "Strategy Name AI Calculation ",
      des: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint Velit officia.",
    },
    {
      title: "Strategy Name AI Calculation ",
      des: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint Velit officia.",
    },
    {
      title: "Strategy Name AI Calculation ",
      des: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint Velit officia.",
    },
    {
      title: "Strategy Name AI Calculation ",
      des: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint Velit officia.",
    },
    {
      title: "Strategy Name AI Calculation ",
      des: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint Velit officia.",
    },
    {
      title: "Strategy Name AI Calculation ",
      des: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint Velit officia.",
    },
    {
      title: "Strategy Name AI Calculation ",
      des: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint Velit officia.",
    },
  ];
  const [isTask, setIsTask] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsTask(false);
    }, 10000);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    getDashboardMetrics();
    getProfitableStrategies();
  }, []);

  async function getDashboardMetrics() {
    try {
      let res = await Api.dashboardMetrics();
      setMatrics(res?.data[0]);
    } catch (error) {
      alert("Error while fetching Dashboard Metrics");
    }
  }

  async function getProfitableStrategies() {
    try {
      let res = await Api.profitableStrategies();
      setProfitS(res?.data);
      console.log(res?.data);
    } catch (error) {
      alert("Error while fetching Profitable Strategies");
    }
  }

  return (
    <>
      <PageTitle title="Home" />
      <div className="profile">
        <div className="profile-banner">
          <img src={banner} alt="" />
        </div>
        <div className="profile-graph d-flex">
          <div className="profile-graph-list">
            {graphList?.map((item, index) => (
              <div className="single d-flex align-items-center" key={index}>
                <div className="icon" style={{ backgroundColor: item.color }}>
                  <img src={item.icon} alt="" />
                </div>
                <div className="text">
                  <p className="fs-14 lh-base fw-medium mb-1">{item.title}</p>
                  <span className="text-heading fw-semibold">
                    {(() => {
                      switch (item.title) {
                        case "Profit":
                          return `${metrics?.overall_pnl}%`;
                        case "Winning streak":
                          return metrics?.streak;
                        case "No. of days actively traded.":
                          return metrics?.no_of_days_traded;
                        default:
                          return item.num;
                      }
                    })()}
                  </span>
                </div>
              </div>
            ))}
            <Link
              to="#"
              className="btn d-inline-flex align-items-center justify-content-center"
            >
              View Watchlist
            </Link>
          </div>
          <div className="profile-graph-wrap">
            <div className="profile-graph-header d-flex align-items-center justify-content-between">
              <h4 className="fs-6 lh-base fw-bold text-heading">PNL</h4>
              <button className="btn">
                {" "}
                <img src={calendar} alt="" /> Last week
              </button>
            </div>
            <BarChart />
          </div>
        </div>
        <div className="dashboard-wrap profile-profit d-flex flex-column">
          <h3 id="title" className="text-heading fs-6 fw-bold lh-base">
            Profitability Strategies
          </h3>
          <div className="profile-profit-cards d-flex flex-wrap">
            {profitS?.map((item, index) => (
              <div className="profile-profit-card bg-white" key={index}>
                <span className="subTitle fs-12">
                  {item?.is_subscribed == "Y" ? "Subscribed" : "Un Subscribed"}
                </span>
                <h4 className="mb-2 pb-1 fs-6 lh-base fw-medium">
                  {item?.strategy_name}
                </h4>
                <p className="fs-14 mb-2 pb-2 lh-base">{item?.desc}</p>
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

      {isTask && <TaskList onClick={() => setIsTask(false)} />}
    </>
  );
}
