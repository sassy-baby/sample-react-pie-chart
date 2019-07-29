import React, { useState, useEffect } from "react";
import {
  VictoryChart,
  VictoryLine,
  VictoryScatter,
  VictoryTheme
} from "victory";
import { now, lastYear } from "../../../data/line";

function VictoryLineChart() {
  return (
    <VictoryChart width={400} height={300} theme={VictoryTheme.material}>
      <VictoryLine
        domain={{ x: [1, 31], y: [0, 12000] }}
        style={{
          data: { stroke: "#FFCA28", strokeWidth: "1" }
        }}
        y="count"
        x="date"
        data={lastYear}
        interpolation={"catmullRom"}
      />
      <VictoryLine
        domain={{ x: [1, 31], y: [0, 12000] }}
        style={{
          data: { stroke: "#20C0B6", strokeWidth: "1" }
        }}
        y="count"
        x="date"
        data={now}
        interpolation={"linear"}
      />
      <VictoryScatter
        data={now}
        size={2}
        y="count"
        x="date"
        style={{ data: { fill: "#20C0B6" } }}
      />
    </VictoryChart>
  );
}

export default VictoryLineChart;
