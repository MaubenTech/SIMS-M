import React, { AriaAttributes, DOMAttributes, HTMLAttributes } from "react";
import "../../css/sidebar.css";
import { NavLink, useLocation } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import ForumIcon from "@mui/icons-material/Forum";
import AssignmentIcon from "@mui/icons-material/Assignment";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      ["box-icon"]?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      ["type"]: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> | string;
      ["name"]: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> | string;
    }
  }
}

// interface BoxIconProps {
//   type?: string;
//   name?: string;
// }

// type BoxIconType = BoxIconProps & React.HTMLProps<HTMLButtonElement> & React.HTMLAttributes<HTMLButtonElement>;

// function BoxIcon({ type, name }: BoxIconType) {
//   return <box-icon type={type} name={name}></box-icon>;
// }

const navigationLinks = [
  {
    index: 0,
    name: "Dashboard",
    href: "/learning-center/dashboard",
    icon: <DashboardIcon />,
  },
  {
    index: 1,
    name: "Profile",
    href: "/learning-center/profile",
    icon: <PersonIcon />,
  },
  {
    index: 2,
    name: "Courses",
    href: "/learning-center/courses",
    icon: <ImportContactsIcon />,
  },
  {
    index: 3,
    name: "Messages",
    href: "/learning-center/messages",
    icon: <ForumIcon />,
  },
  {
    index: 4,
    name: "Assignments",
    href: "/learning-center/assignments",
    icon: <AssignmentIcon />,
  },
];

const Sidebar = ({ isToggleActive }: { isToggleActive: boolean }) => {
  const location = useLocation();
  React.useEffect(() => {
    console.log(location);
  }, []);
  return (
    <>
      <div className="logo">
        <span className="icon">
          <LightbulbIcon />
        </span>
        <h2>SIMS</h2>
      </div>
      <ul className="sidebar-nav">
        {navigationLinks.map((link) => (
          <li key={link.index}>
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
      <div className="db-bottom" style={isToggleActive ? { marginTop: "190%" } : { marginTop: "60px" }}>
        <div className="theme-mode-container">
          <span className="icon">
            <DarkModeIcon />
          </span>
          <button className="switch-theme">Dark Theme</button>
        </div>
        <div className="log">
          <span className="icon">
            <PowerSettingsNewIcon />
          </span>
          <button className="log-button">Log Out</button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
