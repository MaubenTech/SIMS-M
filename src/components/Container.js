import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";
import "../css/container.css";

const Container = () => {
  const [isToggleActive, setIsToggleActive] = useState(true);
  const [isLearningContentActive, setIsLearningContentActive] = useState(true);

  return (
    <div className="container">
      <div
        className={
          isToggleActive
            ? "dashboard-nav-container active"
            : " dashboard-nav-container"
        }
      >
        <Sidebar isToggleActive={isToggleActive} />
      </div>
      <div
        className={
          isLearningContentActive
            ? "learning-content active"
            : "learning-content"
        }
      >
        <Dashboard
          isToggleActive={isToggleActive}
          setIsToggleActive={setIsToggleActive}
          isLearningContentActive={isLearningContentActive}
          setIsLearningContentActive={setIsLearningContentActive}
        />
      </div>
    </div>
  );
};

export default Container;
