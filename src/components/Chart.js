// src/components/Chart.js
import React from "react";
import ReactECharts from "echarts-for-react";

const Chart = ({ option }) => (
  <ReactECharts option={option} style={{ height: "400px", width: "100%" }} />
);

export default Chart;
