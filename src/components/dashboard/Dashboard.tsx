import React, { Dispatch, SetStateAction, useContext, useState } from "react";
import Container from "../Container";
import "../../css/dashboard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSun } from "@fortawesome/free-solid-svg-icons";
import Topbar from "../global/Topbar";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { ColorModeContext, tokens } from "../../theme";
import { useTheme } from "@mui/material";
import TopStudents from "../../data/TopStudents";
import CustomizableLineChartContainer from "../../data/CustomizableLineChartContainer";
import { totalStudentsData } from "../../data/data";
import {
  totalCoursesGraphSetter,
  totalPieChartGraphSetter,
  totalProfitGraphSetter,
  totalRevenueGraphSetter,
  totalStudentsGraphSetter,
} from "../../data/dataBoxes";
import CustomizableBarChartContainer from "../../data/CustomizableBarChartContainer";
import CustomPieChartContainer from "../../data/CustomPieChartContainer";

const Dashboard = ({
  isToggleActive,
  setIsToggleActive,
  isLearningContentActive,
  setIsLearningContentActive,
}: {
  isToggleActive: boolean;
  setIsToggleActive: Dispatch<SetStateAction<boolean>>;
  isLearningContentActive: boolean;
  setIsLearningContentActive: Dispatch<SetStateAction<boolean>>;
}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  return (
    <>
      <div className="main">
        <Topbar
          isToggleActive={isToggleActive}
          setIsToggleActive={setIsToggleActive}
          isLearningContentActive={isLearningContentActive}
          setIsLearningContentActive={setIsLearningContentActive}
        />
        <div className="dashboard">
          <div className="box box1">
            <TopStudents />
          </div>
          <div className="box box2">
            <CustomizableLineChartContainer {...totalStudentsGraphSetter} />
          </div>
          <div className="box box3">
            <CustomizableLineChartContainer {...totalCoursesGraphSetter} />
          </div>
          <div className="box box4">
            <CustomPieChartContainer {...totalPieChartGraphSetter} />
          </div>
          <div className="box box5">
            <CustomizableLineChartContainer {...totalCoursesGraphSetter} />
          </div>
          <div className="box box6">
            <CustomizableLineChartContainer {...totalCoursesGraphSetter} />
          </div>
          <div className="box box7"></div>
          <div className="box box8">
            <CustomizableBarChartContainer {...totalRevenueGraphSetter} />
          </div>
          <div className="box box9">
            <CustomizableBarChartContainer {...totalProfitGraphSetter} />
          </div>
        </div>
        {/* <div className="changeTheme">
          {theme.palette.mode === "dark" ? (
            <FontAwesomeIcon icon={faMoon} size="3x" />
          ) : (
            // <FontAwesomeIcon icon={faSun} size="3x" />
            // <FontAwesomeIcon icon={faMoon} size="3x" />
            <FontAwesomeIcon icon={faSun} size="3x" />
          )}
        </div> */}
      </div>
    </>
  );
};

export default Dashboard;
