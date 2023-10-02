import React from "react";
import "../css/dashboard.css";
import { NavLink } from "react-router-dom";

const navigationLinks = [
  {
    name: "Dashboard",
    href: "/learning-center/dashboard",
    icon: <box-icon type="solid" name="dashboard"></box-icon>,
  },
  {
    name: "Profile",
    href: "/learning-center/profile",
    icon: <box-icon name="user" type="solid"></box-icon>,
  },
  {
    name: "Courses",
    href: "/learning-center/courses",
    icon: <box-icon name="book-open"></box-icon>,
  },
  {
    name: "Messages",
    href: "/learning-center/messages",
    icon: <box-icon name="chat"></box-icon>,
  },
  {
    name: "Assignments",
    href: "/learning-center/assignments",
    icon: <box-icon name="network-chart" type="solid"></box-icon>,
  },
];

const Sidebar = ({ isToggleActive }) => {
  return (
    <>
      <div className="logo">
        <span className="icon">
          <box-icon name="bulb" type="solid"></box-icon>
        </span>
        <h2>SIMS</h2>
      </div>
      <ul className="dashboard-nav">
        {navigationLinks.map((link) => (
          <li>
            <NavLink
              key={link.name}
              to={link.href}
              className={({ isActive }) => {
                console.log(link.href + " " + isActive);
                return isActive ? "active" : "";
              }}
            >
              <span className="icon">{link.icon}</span>
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
      <div
        className="db-bottom"
        style={isToggleActive ? { marginTop: "190%" } : { marginTop: "60px" }}
      >
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
    </>
  );
};

export default Sidebar;
