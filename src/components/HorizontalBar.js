import React from "react";
import { Chart } from "react-google-charts";

const data = [
  ["Year", "Predicted", "Emitted"],
  ["2017", 4000000, 4300000],
  ["2018", 4792000, 5694000],
  ["2019", 2695000, 2896000],
  ["2021", 2099000, 1953000],
];

const options = {
  chart: {
    title: "Emission",
  },
  hAxis: {
    title: "Total Population",
    minValue: 0,
  },
  vAxis: {
    title: "City",
  },
  bars: "horizontal",
  axes: {
    y: {
      0: { side: "right" },
    },
  },
  height:350
};

export default function HorizontalBar() {
  return (
    <Chart
      chartType="Bar"
      width="100%"
      height="100%"
      data={data}
      options={options}
    />
  );
}
