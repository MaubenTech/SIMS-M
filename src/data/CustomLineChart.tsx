import React from "react";
import { Line, ResponsiveContainer, LineChart } from "recharts";

function CustomLineChart({ data }: any) {
  return (
    <ResponsiveContainer>
      <LineChart
        width={100}
        height={100}
        data={data}

        // margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        {/* <CartesianGrid strokeDasharray="3 3" /> */}
        {/* <XAxis dataKey="name" /> */}
        {/* <YAxis /> */}
        {/* <Tooltip /> */}
        {/* <Legend /> */}
        <Line type="monotone" dataKey="pv" stroke="#8884d8" />
        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default CustomLineChart;
