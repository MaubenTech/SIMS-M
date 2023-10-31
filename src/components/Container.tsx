import React, { useState } from "react";
import Sidebar from "./global/Sidebar";
import Dashboard from "./dashboard/Dashboard";
import "../css/container.css";

const Container = () => {
  const [isToggleActive, setIsToggleActive] = useState<boolean>(true);
  const [isLearningContentActive, setIsLearningContentActive] = useState<boolean>(true);

  return (
    <div className="container">
      <div className={isToggleActive ? "sidebar-nav-container active" : " sidebar-nav-container"}>
        <Sidebar isToggleActive={isToggleActive} />
      </div>
      <div className={isLearningContentActive ? "learning-content active" : "learning-content"}>
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
