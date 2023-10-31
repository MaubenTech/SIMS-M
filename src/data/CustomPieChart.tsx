import React from "react";
import { Pie, PieChart, ResponsiveContainer } from "recharts";
import { ChartDataType } from "./ChartDataType";

function CustomPieChart({ dataArray, dataArray02 }: ChartDataType) {
  return (
    <div className="chart">
      <ResponsiveContainer>
        <PieChart width={100} height={100}>
          <Pie data={dataArray} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
          <Pie data={dataArray02} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
        </PieChart>
      </ResponsiveContainer>
      <div className="chart-options">
        {dataArray.map((item) => (
          <div className="option" key={item.name}></div>
        ))}
      </div>
    </div>
  );
}

export default CustomPieChart;
