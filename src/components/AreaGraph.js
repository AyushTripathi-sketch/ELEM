import React from "react";
import { Chart } from "react-google-charts";

const data = [
  ["Year", "Estimated"],
  ["2021", 1000],
  ["2022", 1170],
  ["2023", 1250],
  ["2024", 1100],
];

const options = {
  vAxis: { title: "Energy(in kWh)", titleTextStyle: { color: "#000" }, minValue: 0 },
  chartArea: { width: "70%", height: "70%" },
  animation: {
    startup: true,
    easing: "out",
    duration: 1500,
  },
  legend: { position: "none" },
};

export default function AreaGraph() {
  return (
    <Chart
      chartType="AreaChart"
      width="100%"
      height="350px"
      data={data}
      options={options}
    />
  );
}
