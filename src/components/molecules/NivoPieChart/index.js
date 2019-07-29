import React, { useEffect, useState } from "react";
import { ResponsivePie } from "@nivo/pie";
import { linearGradientDef } from "@nivo/core";

const NivoPieChart = () => {
  const [percent, setPercent] = useState(0);
  // const [data, setData] = useState([{ x: 1, y: 0 }, { x: 2, y: 100 - 0 }]);
  useEffect(() => {
    const interval = setInterval(() => {
      percent === 100 && clearInterval(interval);
      percent < 100 && setPercent(percent + 1);
    }, 6);
    return () => {
      clearInterval(interval);
    };
  }, [percent]);
  return (
    <div style={{ height: 400 }}>
      <ResponsivePie
        data={[
          {
            id: "main",
            value: 1
          }
        ]}
        endAngle={36 * percent}
        cornerRadius={45}
        colors={{ scheme: "nivo" }}
        innerRadius={0.7}
        enableRadialLabels={false}
        enableSlicesLabels={false}
        slicesLabelsSkipAngle={10}
        defs={[
          linearGradientDef("gradientA", [
            { offset: 0, color: "#FFCA28" },
            { offset: 100, color: "#5AC391" }
          ])
        ]}
        fill={[{ match: "*", id: "gradientA" }]}
      />
      <div className="Title">NivoPieChart</div>
    </div>
  );
};

export default NivoPieChart;
