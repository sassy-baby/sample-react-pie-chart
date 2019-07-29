import React, { useEffect, useState } from "react";
import { ResponsivePie } from "@nivo/pie";

const NivoPieChart = () => {
  const [percent, setPercent] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      percent === 100 && clearInterval(interval);
      percent < 100 && setPercent(percent + 1);
    }, 10);
    return () => {
      clearInterval(interval);
    };
  }, [percent]);
  return (
    <div style={{ height: 400, width: 400, position: "relative" }}>
      <ResponsivePie
        style={{ position: "absolute" }}
        data={[
          { id: "main", value: percent },
          { id: "sub", value: 100 - percent }
        ]}
        colors={"#f2f2f2"}
        animate
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        innerRadius={0.7}
        enableRadialLabels={false}
        enableSlicesLabels={false}
        defs={[
          {
            id: "main",
            type: "linearGradient",
            colors: [
              { offset: 0, color: "#FFCA28" },
              { offset: 100, color: "#5AC391" }
            ]
          }
        ]}
        fill={[{ match: { id: "main" }, id: "main" }]}
      />
    </div>
  );
};

export default NivoPieChart;
