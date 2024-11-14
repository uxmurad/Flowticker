import { useState } from "react";
import { LiaAngleLeftSolid, LiaAngleDownSolid } from "react-icons/lia";
import { BsArrowRight, BsArrowDown, BsPlay } from "react-icons/bs";
import { IoIosClose } from "react-icons/io";
import lineArrow from "../assets/img/lineArrow.svg";
import { decision } from "../assets/js/decision";
import { Link } from "react-router-dom";
import { DropdownCreate } from "../components/DropdownCreate";
import { Select } from "../components/Select";

export default function CreateStrategies() {
  const [leftBar, setLeftBar] = useState(false);
  const [topBar, setTopBar] = useState(true);
  const handleChangeTopBar = () => {
    setTopBar(true);
    setLeftBar(false);
  };
  const handleChangeLeftBar = () => {
    setLeftBar(true);
    setTopBar(false);
  };

  const [droppedItems, setDroppedItems] = useState([]);

  const [feilds, setfeilds] = useState([]);
  const [feildType, setfeildType] = useState([]);

  const handleDragOver = (event) => {
    event.preventDefault();
  };
  const handleDrop = (event) => {
    event.preventDefault();

    const droppedItem = JSON.parse(
      event.dataTransfer.getData("application/json")
    );

    const fields =
      decision["templateData"][droppedItem.head][`id${droppedItem.id}`];

    const feildType = decision["templateObj"][`${fields.field_id}`];

    setfeilds(fields);
    setfeildType(feildType);
    console.log(fields);
    console.log(feildType);

    setDroppedItems([...droppedItems, droppedItem]);
  };

  const removeDrapedItem = (id) => {
    setDroppedItems(droppedItems.filter((item) => item.id !== id));
  };

  return (
    <div className="dashboard-wrap p-0">
      <div className="createStrategies">
        <div className="createStrategies-header d-flex justify-content-between">
          <div className="header-left d-flex align-items-center">
            <Link
              to="/strategies"
              className="backBtn p-0 border-0 text-white d-flex align-items-center justify-content-center"
            >
              <LiaAngleLeftSolid />
            </Link>
            <p className="">Strategy name</p>
            <button className="edit bg-primary border-0  d-flex align-items-center justify-content-center">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.75001 3.50137L10.5 5.25137M7.58334 11.668L12.25 11.668M2.91668 9.3347L2.33334 11.668L4.66668 11.0847L11.4252 4.3262C11.6439 4.10742 11.7668 3.81073 11.7668 3.50137C11.7668 3.19201 11.6439 2.89532 11.4252 2.67654L11.3248 2.5762C11.1061 2.35749 10.8094 2.23462 10.5 2.23462C10.1907 2.23462 9.89396 2.35749 9.67518 2.5762L2.91668 9.3347Z"
                  stroke="#151B22"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          <div className="header-right d-flex gap-2 gap-xl-3 align-items-center">
            <div className="arrow-btn p-1 d-flex gap-1">
              <button
                className={leftBar ? "active" : ""}
                onClick={() => handleChangeLeftBar()}
              >
                <BsArrowRight />
              </button>
              <button
                className={topBar ? "active" : ""}
                onClick={() => handleChangeTopBar()}
              >
                <BsArrowDown />
              </button>
            </div>
            <div className="header-right-btn d-flex gap-2 gap-xl-3">
              <button className="btn text-white padding">Close</button>
              <button className="btn bg-primary padding">Save</button>
              <button className="btn play text-primary d-flex align-items-center justify-content-center">
                <BsPlay />
              </button>
              <button className="btn play d-flex align-items-center justify-content-center">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.64113 4.69727C7.48482 4.69727 7.33491 4.75936 7.22438 4.86989C7.11385 4.98042 7.05176 5.13033 7.05176 5.28664C7.05176 5.44295 7.11385 5.59286 7.22438 5.70339C7.33491 5.81392 7.48482 5.87602 7.64113 5.87602H12.3561C12.5124 5.87602 12.6624 5.81392 12.7729 5.70339C12.8834 5.59286 12.9455 5.44295 12.9455 5.28664C12.9455 5.13033 12.8834 4.98042 12.7729 4.86989C12.6624 4.75936 12.5124 4.69727 12.3561 4.69727H7.64113Z"
                    fill="currentColor"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.95375 1.55371C8.32472 1.55371 7.04145 1.55371 6.03873 1.68966C5.00929 1.82954 4.18809 2.12344 3.54292 2.77568C2.89854 3.42714 2.60935 4.25462 2.47105 5.29192C2.33667 6.30486 2.33667 7.6007 2.33667 9.24781V13.254C2.33667 14.439 2.33667 15.3765 2.41211 16.083C2.48676 16.7808 2.64629 17.4103 3.10364 17.8315C3.46984 18.1694 3.93348 18.3815 4.42856 18.4389C5.04701 18.5096 5.6246 18.2142 6.19433 17.8102C6.77034 17.4032 7.46895 16.7847 8.35065 16.0052L8.37894 15.98C8.78758 15.6186 9.06419 15.3749 9.29522 15.2052C9.5184 15.0425 9.65435 14.9836 9.76908 14.96C9.9206 14.9302 10.0765 14.9302 10.228 14.96C10.3427 14.9836 10.4795 15.0425 10.7019 15.2052C10.9329 15.3742 11.2095 15.6186 11.6181 15.98L11.6472 16.0052C12.5281 16.7847 13.2267 17.4032 13.8028 17.811C14.3725 18.2142 14.9501 18.5096 15.5685 18.4389C16.0634 18.382 16.5274 18.1693 16.8934 17.8315C17.35 17.4103 17.5103 16.7808 17.585 16.083C17.6604 15.3765 17.6604 14.439 17.6604 13.254V9.24781C17.6604 7.6007 17.6604 6.30407 17.526 5.29192C17.3877 4.25462 17.0985 3.42714 16.4542 2.77568C15.809 2.12344 14.9878 1.82954 13.9584 1.68966C12.9556 1.55371 11.6724 1.55371 10.0433 1.55371H9.95375ZM4.37984 3.60474C4.7704 3.21025 5.30083 2.98 6.19668 2.85819C7.11061 2.73403 8.31372 2.73246 9.99776 2.73246C11.6818 2.73246 12.8849 2.73403 13.7988 2.85819C14.6947 2.98 15.2251 3.21025 15.6157 3.60474C16.007 4.00001 16.2357 4.53831 16.3567 5.44752C16.4793 6.37323 16.4809 7.59048 16.4809 9.2926V13.2163C16.4809 14.4469 16.4801 15.3223 16.4125 15.9573C16.3418 16.6095 16.2137 16.8539 16.0943 16.9647C15.9104 17.1336 15.6793 17.2397 15.4342 17.2672C15.277 17.2853 15.0145 17.2248 14.4833 16.8492C13.9662 16.4822 13.3148 15.9077 12.3985 15.0968L12.378 15.0787C11.9946 14.74 11.6771 14.4595 11.3965 14.2536C11.1034 14.0398 10.808 13.8748 10.4598 13.8049C10.1548 13.7434 9.84068 13.7434 9.53569 13.8049C9.18756 13.8756 8.89131 14.0398 8.59898 14.2544C8.31843 14.4587 8.00096 14.74 7.61747 15.0787L7.59704 15.0968C6.68076 15.9077 6.0293 16.4822 5.51222 16.8492C4.981 17.2248 4.71853 17.2853 4.56136 17.2672C4.31481 17.2389 4.08365 17.133 3.90126 16.9647C3.78182 16.8539 3.65294 16.6095 3.58379 15.9573C3.51542 15.3215 3.51463 14.4469 3.51463 13.2163V9.29181C3.51463 7.59048 3.51621 6.37323 3.6388 5.44752C3.75981 4.53831 3.98849 4.00001 4.37984 3.60474Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="createStrategies-wrap d-flex">
          <div className="createStrategies-leftBar pb-3">
            <p className="action d-flex align-items-center justify-content-between">
              Actions Panel
            </p>
            <div className="action-panel">
              {decision["decitionItems"].map((item, index) => (
                <DropdownCreate item={item} decision={decision} index={index} />
              ))}
            </div>
          </div>
          <div className="createStrategies-content d-flex flex-column pb-3">
            {feildType.length > 0 && (
              <div className="content-header d-flex mx-auto justify-content-between">
                <div className="content-header-left d-flex align-items-center gap-2">
                  {feildType.map((field, index) => {
                    // Get the key and value of each field
                    const [fieldName, fieldType] = Object.entries(field)[0];
                    const feildhead = feilds[fieldName];
                    const data = decision["fieldData"][feildhead.split(",")[1]];

                    return (
                      <div key={index}>
                        {fieldType === "select" ? (
                          <Select head={feildhead.split(",")[0]} data={data} />
                        ) : (
                          <input
                            className="commonInput"
                            type="number"
                            placeholder={feildhead.split(",")[0]}
                          />
                        )}
                      </div>
                    );
                  })}
                </div>
                <div className="content-header-btn d-flex gap-2 gap-xl-3">
                  <button className="btn" onClick={() => setDroppedItems([])}>
                    Reset
                  </button>
                  <button className="btn bg-primary">Save</button>
                </div>
              </div>
            )}
            <div
              className="drop mx-auto text-center d-flex align-items-center justify-content-center flex-column"
              onDragOver={handleDragOver}
              onDrop={handleDrop}
            >
              <button className="btn btn1 d-inline-block bg-primary">
                Start
              </button>
              <img className="style1" src={lineArrow} alt="" />
              {droppedItems.length > 0 ? (
                <>
                  {droppedItems.map((item) => (
                    <div key={item.id} style={{ cursor: "pointer" }}>
                      <div className="drop-btn btn d-block position-relative">
                        <div
                          dangerouslySetInnerHTML={{ __html: item.value }}
                        ></div>
                        <span
                          onClick={() => removeDrapedItem(item.id)}
                          className="close position-absolute bottom-100 end-0 bg-white fs-18 d-flex align-items-center justify-content-center"
                        >
                          <IoIosClose />
                        </span>
                      </div>
                      <img className="style1" src={lineArrow} alt="" />
                    </div>
                  ))}
                </>
              ) : (
                <>
                  <div className="drop-btn btn d-block text-primary">
                    Drop Here
                  </div>
                  <img className="style1" src={lineArrow} alt="" />
                </>
              )}
              <button className="drop-btn btn text-primary gap-2 d-flex align-items-center">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.5 11.5V14.8333C16.5 15.2754 16.3244 15.6993 16.0118 16.0118C15.6993 16.3244 15.2754 16.5 14.8333 16.5H3.16667C2.72464 16.5 2.30072 16.3244 1.98816 16.0118C1.67559 15.6993 1.5 15.2754 1.5 14.8333V11.5M4.83333 7.33333L9 11.5M9 11.5L13.1667 7.33333M9 11.5V1.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Drop your element here
              </button>
            </div>
          </div>
          {leftBar && (
            <div className="createStrategies-leftBar rightBar">
              <p className="action">Properties</p>
              <div className="single d-flex ">
                <div className="it border-0 w-100 d-flex justify-content-between align-items-center">
                  <div className="d-flex ">
                    {" "}
                    Symbol &#62; <span>Gold</span>
                  </div>
                  <LiaAngleDownSolid />
                </div>
              </div>
              <div className="single d-flex ">
                <div className="it border-0 w-100 d-flex justify-content-between align-items-center">
                  <div className="d-flex ">
                    {" "}
                    Expiration &#62; <span>6 month</span>
                  </div>
                  <LiaAngleDownSolid />
                </div>
              </div>
              <div className="single d-flex ">
                <div className="it border-0 w-100 d-flex justify-content-between align-items-center">
                  <div className="d-flex ">
                    {" "}
                    Short Put &#62; <span>-.30 delta</span>
                  </div>
                  <LiaAngleDownSolid />
                </div>
              </div>
              <div className="single d-flex ">
                <div className="it border-0 w-100 d-flex justify-content-between align-items-center">
                  <div className="d-flex ">
                    {" "}
                    Long Put &#62; <span>-.10 delta</span>
                  </div>
                  <LiaAngleDownSolid />
                </div>
              </div>
              <div className="single d-flex ">
                <div className="it border-0 w-100 d-flex justify-content-between align-items-center">
                  <div className="d-flex ">
                    Position Size &#62; <span>1 contact</span>
                  </div>
                  <LiaAngleDownSolid />
                </div>
              </div>
              <div className="single d-flex ">
                <div className="it border-0 w-100 d-flex justify-content-start align-items-center">
                  <div className="d-flex ">
                    Price &#62; <span>100% of bid/ask&#160;&#160;</span>
                  </div>
                  <LiaAngleDownSolid />
                </div>
              </div>
              <div className="single d-flex ">
                <div className="it border-0 w-100 d-flex justify-content-start align-items-center">
                  <div className="d-flex ">
                    Exit Options &#62; <span>None&#160;&#160;</span>
                  </div>
                  <LiaAngleDownSolid />
                </div>
              </div>
              <input className="commonInput" type="text" value="Togs" />
              <div className="content-header-btn d-flex gap-3 mt-3">
                <button className="btn" onClick={() => setDroppedItems([])}>
                  Reset
                </button>
                <button className="btn bg-primary">Save</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
