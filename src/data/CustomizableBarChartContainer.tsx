import React from "react";
import { ChartDataType } from "./ChartDataType";
import CustomBarChart from "./CustomBarChart";
import { Link } from "react-router-dom";

export default function CustomizableBarChartContainer(chartData: ChartDataType) {
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
          <CustomBarChart data={chartData.dataArray} />
        </div>
        <div className="chart-information">
          <span className="percentage" style={{ color: chartData.percentage < 0 ? "#823731" : "#4C9745" }}>
            {chartData.percentage}$
          </span>
          <div className="duration">This Academic Session</div>
        </div>
      </div>
    </div>
  );
}
