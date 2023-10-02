import React, { useState } from "react";
import Container from "./Container";
import "../css/main.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Dashboard = ({
  isToggleActive,
  setIsToggleActive,
  isLearningContentActive,
  setIsLearningContentActive,
}) => {
  const sideBarActive = () => {
    isToggleActive ? setIsToggleActive(false) : setIsToggleActive(true);
    isLearningContentActive
      ? setIsLearningContentActive(false)
      : setIsLearningContentActive(true);
  };
  return (
    <>
      <div className="main">
        <div className="topbar">
          <div className="toggle">
            {isToggleActive ? (
              <FontAwesomeIcon
                icon={faBars}
                size="44"
                onClick={sideBarActive}
                className="toggleIcon"
              />
            ) : (
              <box-icon
                name="x"
                onClick={sideBarActive}
                className="cancelToggle"
              ></box-icon>
            )}
          </div>
          <div className="user">
            <box-icon name="message"></box-icon>
            <box-icon name="bell"></box-icon>
            <box-icon name="user-circle" type="solid"></box-icon>
            <span>Hi, User</span>
            <box-icon name="chevron-down"></box-icon>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
