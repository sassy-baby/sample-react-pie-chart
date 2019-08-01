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
    <VictoryChart
      width={400}
      height={300}
      theme={VictoryTheme.material}
      style={{
        parent: {
          border: "1px solid red"
        }
      }}
    >
      <VictoryLine
        domain={{ x: [1, 31], y: [0, 12000] }}
        style={{
          data: { stroke: "#FFCA28", strokeWidth: "1" }
        }}
        data={lastYear}
        interpolation={"catmullRom"}
      />
      <VictoryLine
        style={{
          data: { stroke: "#20C0B6", strokeWidth: "1" }
        }}
        data={now}
        interpolation={"linear"}
      />
      <VictoryScatter
        data={now}
        size={2}
        style={{ data: { fill: "#20C0B6" } }}
      />
    </VictoryChart>
  );
}

export default VictoryLineChart;
