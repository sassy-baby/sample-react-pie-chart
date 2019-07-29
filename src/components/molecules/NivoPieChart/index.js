import React from "react";
import { ResponsivePie } from "@nivo/pie";
import { generateProgrammingLanguageStats } from "@nivo/generators";

const NivoPieChart = () => (
  <div style={{ height: 400 }}>
    <ResponsivePie
      data={generateProgrammingLanguageStats(true, 9).map(d => ({
        id: d.label,
        ...d
      }))}
      colors={{ scheme: "purple_blue_green" }}
      innerRadius={0.7}
      enableRadialLabels={false}
      slicesLabelsSkipAngle={10}
      animate={true}
      isInteractive={false}
    />
    <div className="Title">NivoPieChart</div>
  </div>
);

export default NivoPieChart;
