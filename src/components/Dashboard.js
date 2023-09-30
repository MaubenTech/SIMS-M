import React from "react";
import "../css/dashboard.css";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="container">
      <div className="dashboard-nav-container">
        <div className="logo">
          <h2>SIMS</h2>
        </div>
        <ul className="dashboard-nav">
          <li>
            <Link to={"/learning-center/dashboard"}>
              <span className="icon">
                <box-icon type="solid" name="dashboard"></box-icon>
              </span>
              <span className="title">Dashboard</span>
            </Link>
          </li>
          <li>
            <Link to={"/learning-center/profile"}>
              <span className="icon">
                <box-icon name="user" type="solid"></box-icon>
              </span>
              <span className="title">Profile</span>
            </Link>
          </li>
          <li>
            <Link to={"/learning-center/courses"}>
              <span className="icon">
                <box-icon name="book-open"></box-icon>
              </span>
              <span className="title">Courses</span>
            </Link>
          </li>
          <li>
            <Link to={"/learning-center/messages"}>
              <span className="icon">
                <box-icon name="chat"></box-icon>
              </span>
              <span className="title">Messages</span>
            </Link>
          </li>
          <li>
            <Link to={"/learning-center/Assignments"}>
              <span className="icon">
                <box-icon name="network-chart" type="solid"></box-icon>
              </span>
              <span className="title">Assignments</span>
            </Link>
          </li>
        </ul>
        <div className="db-bottom">
          <div className="theme-mode-container">
            <span className="icon">
              <box-icon name="moon" className="icon"></box-icon>
            </span>
            <button className="switch-theme">Dark Theme</button>
          </div>
          <div className="log">
            <span className="icon">
              <box-icon name="power-off"></box-icon>
            </span>
            <button className="log-button">Log Out</button>
          </div>
        </div>
      </div>
      <div className="learning-content"></div>
    </div>
  );
};

export default Dashboard;
