import React from "react";
import { Bar, BarChart, ResponsiveContainer } from "recharts";

function CustomBarChart({ data }: any) {
  return (
    <ResponsiveContainer>
      <BarChart width={100} height={100} data={data}>
        {/* <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend /> */}
        <Bar dataKey="pv" fill="#8884d8" />
        <Bar dataKey="uv" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default CustomBarChart;
