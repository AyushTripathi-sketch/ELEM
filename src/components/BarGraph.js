import React from "react";
import { Chart } from "react-google-charts";

const data = [
  ["Year", "Energy", {role: "style" }],
  ["2018", 1000,"#b87333"],
  ["2019", 1100,"gold"],
  ["2020", 1400,"silver"],
  ["2021", 1200,"silver"],
  // [
  //   { type: "date", label: "Day" },
  //   "Average temperature",
  //   "Average hours of daylight",
  // ],
  // [new Date(2014, 0), -0.5, 5.7],
  // [new Date(2014, 1), 0.4, 8.7],
  // [new Date(2014, 2), 0.5, 12],
  // [new Date(2014, 3), 2.9, 15.3],
  // [new Date(2014, 4), 6.3, 18.6],
  // [new Date(2014, 5), 9, 20.9],
  // [new Date(2014, 6), 10.6, 19.8],
  // [new Date(2014, 7), 10.3, 16.6],
  // [new Date(2014, 8), 7.4, 13.3],
  // [new Date(2014, 9), 4.4, 9.9],
  // [new Date(2014, 10), 1.1, 6.6],
  // [new Date(2014, 11), -0.2, 4.5],
];

const options = {
  chart: {
    title: "Average Temperatures and Daylight in Iceland Throughout the Year",
  },
  // width: 400,
  // height: 300,
  series: {
    // Gives each series an axis name that matches the Y-axis below.
    0: { axis: "Temps" },
    1: { axis: "Daylight" },
  },
  axes: {
    // Adds labels to each axis; they don't have to match the axis names.
    y: {
      Temps: { label: "Energy (kWh)" },
      Daylight: { label: "Daylight" },
    },
  },
  vAxis: { title: "Energy(in kWh)", titleTextStyle: { color: "#000" }, },
  legend: { position: "none" },
  animation: {
    duration: 1000,
    easing: "linear",
    startup: true,
  },
};

export default function BarGraph(props) {
  return (
    <Chart
      chartType="ColumnChart"
      width="100%"
      height="350px"
      data={props.data}
      options={options}
    />
  );
}