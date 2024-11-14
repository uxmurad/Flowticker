import { LiaTimesSolid } from "react-icons/lia";
import { useEffect, useState } from "react";
import Api from "../../api/api.js";

export default function TaskList({ onClick }) {
  let [tasks, setTasks] = useState([]);

  const isComplete = [
    {
      title: "Recharging Wallet for subscription.",
      value: false,
    },
    {
      title: "Reminder to validate email id or mobile number.",
      value: false,
    },
    {
      title: "Activating whatsapp for notification.",
      value: false,
    },
    {
      title: "Adding Broker to integrate the strategy to his live account.",
      value: true,
    },
    {
      title:
        "Marketing actions like publishing key information to his social platforms etc.",
      value: true,
    },
  ];

  useEffect(() => {
    getPendingTasks();
  }, []);

  useEffect(() => {
    console.log(tasks);
  }, [tasks]);

  async function getPendingTasks() {
    try {
      let res = await Api.pending();
      setTasks(res?.data[0]?.PROFILE);
    } catch (error) {
      alert("Error while pending tasks");
    }
  }

  return (
    <div className="task-list bg-black bg-opacity-20 w-100 h-100 position-fixed top-0 start-0 z-1 d-flex align-items-end justify-content-end">
      <div className="bg-white p-3 rounded-3">
        <div className="d-flex align-items-center justify-content-between mb-3">
          <h5 className="mb-0">Pending actions</h5>
          <button
            onClick={onClick}
            className="task-close fs-6 p-0 rounded-pill d-flex align-items-center justify-content-center"
          >
            <LiaTimesSolid />
          </button>
        </div>
        <ul>
          {tasks?.map((item, index) => (
            <li
              className={`d-flex align-items-center gap-2 ${
                item.value ? "complete" : ""
              }`}
              key={index}
            >
              <span className="icon rounded-pill"></span>
              <span className="content">{item.message}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
