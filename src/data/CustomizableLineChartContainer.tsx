import { faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Tooltip } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { totalStudentsData } from "./data";
import "../css/TotalStudents.css";
import CustomLineChart from "./CustomLineChart";
import { ChartDataType } from "./ChartDataType";

function CustomizableLineChartContainer(chartData: ChartDataType) {
  return (
    <div className="chart-box">
      <div className="entity-info">
        <div className="title">
          {chartData.icon}
          <span>{chartData.title}</span>
        </div>
        <h1>{chartData.number}</h1>
        <Link to={"/"}>View All</Link>
      </div>
      <div className="chart-info">
        <div className="chart">
          <CustomLineChart data={chartData.dataArray} />
        </div>
        <div className="chart-information">
          <span className="percentage" style={{ color: chartData.percentage < 0 ? "#823731" : "#4C9745" }}>
            {chartData.percentage}%
          </span>
          <div className="duration">This Academic Session</div>
        </div>
      </div>
    </div>
  );
}

export default CustomizableLineChartContainer;
