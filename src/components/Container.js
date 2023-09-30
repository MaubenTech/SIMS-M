import React from "react";
import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";

const Container = () => {
  return (
    <div className="container">
      <div className="dashboard-nav-container">
        <Sidebar />
      </div>
      <div className="learning-content">
        <Dashboard />
      </div>
    </div>
  );
};

export default Container;
