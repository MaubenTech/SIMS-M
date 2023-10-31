import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Dispatch, SetStateAction } from "react";
import MessageIcon from "@mui/icons-material/Message";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import PersonIcon from "@mui/icons-material/Person";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ClearIcon from "@mui/icons-material/Clear";

function Topbar({
  isToggleActive,
  setIsToggleActive,
  isLearningContentActive,
  setIsLearningContentActive,
}: {
  isToggleActive: boolean;
  setIsToggleActive: Dispatch<SetStateAction<boolean>>;
  isLearningContentActive: boolean;
  setIsLearningContentActive: Dispatch<SetStateAction<boolean>>;
}) {
  const sideBarActive = () => {
    isToggleActive ? setIsToggleActive(false) : setIsToggleActive(true);
    isLearningContentActive ? setIsLearningContentActive(false) : setIsLearningContentActive(true);
  };
  return (
    <div className="topbar">
      <div className="toggle">
        {isToggleActive ? (
          <FontAwesomeIcon icon={faBars} size="3x" onClick={sideBarActive} className="toggleIcon" />
        ) : (
          // <box-icon name="x" onClick={sideBarActive} className="cancelToggle"></box-icon>
          <ClearIcon onClick={sideBarActive} className="cancelToggle" />
        )}
      </div>
      <div className="user">
        <MessageIcon />
        <NotificationsNoneIcon />
        <PersonIcon />
        <span>Hi, User</span>
        <ExpandMoreIcon />
      </div>
    </div>
  );
}

export default Topbar;
