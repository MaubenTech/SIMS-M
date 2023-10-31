import { faBook, faMoneyBill, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { barChartData, pieChartData01, pieChartData02, totalCoursesData, totalStudentsData } from "./data";

export const totalStudentsGraphSetter = {
  icon: <FontAwesomeIcon icon={faUser} />,
  title: "Total Students",
  number: "110",
  dataKey: "students",
  percentage: 45,
  dataArray: totalStudentsData,
};

export const totalCoursesGraphSetter = {
  icon: <FontAwesomeIcon icon={faBook} />,
  title: "Total Courses",
  number: "500",
  dataKey: "students",
  percentage: 50,
  dataArray: totalCoursesData,
};

export const totalRevenueGraphSetter = {
  icon: <FontAwesomeIcon icon={faMoneyBill} />,
  title: "Total Revenue",
  number: "500",
  dataKey: "students",
  percentage: 500,
  dataArray: barChartData,
};

export const totalProfitGraphSetter = {
  icon: <FontAwesomeIcon icon={faMoneyBill} />,
  title: "Total Profit",
  number: "500",
  dataKey: "students",
  percentage: 500,
  dataArray: barChartData,
};

export const totalPieChartGraphSetter = {
  icon: <FontAwesomeIcon icon={faMoneyBill} />,
  title: "Total Profit",
  number: "11500",
  dataKey: "students",
  percentage: 11500,
  dataArray: pieChartData01,
  dataArray02: pieChartData02,
};
