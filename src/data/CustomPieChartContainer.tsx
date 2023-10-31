import React from "react";
import { ChartDataType } from "./ChartDataType";
import CustomPieChart from "./CustomPieChart";
import { Link } from "react-router-dom";

function CustomPieChartContainer(chartData: ChartDataType) {
  return (
    <div className="chart-box">
      <div className="entity-info" style={{ flex: 1 }}>
        <div className="title">
          {chartData.icon}
          <span>{chartData.title}</span>
        </div>
        <h1>{chartData.number}</h1>
        <Link to={"/"}>View All</Link>
      </div>
      <div className="chart-info" style={{ flex: 4 }}>
        <CustomPieChart dataArray={chartData.dataArray} dataArray02={chartData.dataArray02} icon={""} title={""} number={""} percentage={0} />
        {/* <div className="chart-information">
          <span className="percentage" style={{ color: chartData.percentage < 0 ? "#823731" : "#4C9745" }}>
            {chartData.percentage}
          </span>
          <div className="duration">This Academic Session</div>
        </div> */}
      </div>
    </div>
  );
}

export default CustomPieChartContainer;
