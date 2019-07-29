import React from "react";
import { RadialChart } from "react-vis";

const myData = [{ angle: 80 }, { angle: 20 }];

function VisPieChart() {
  return (
    <RadialChart
      data={myData}
      animation={{ damping: 9, stiffness: 300 }}
      width={300}
      height={300}
      radius={100}
      innerRadius={80}
    />
  );
}

export default VisPieChart;
