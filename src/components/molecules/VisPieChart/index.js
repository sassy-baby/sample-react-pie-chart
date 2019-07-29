import React, { useState, useEffect } from "react";
import { RadialChart } from "react-vis";

function VisPieChart() {
  const [percent, setPercent] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      percent === 100 && clearInterval(interval);
      percent < 100 && setPercent(percent + 1);
    }, 1);
    return () => {
      clearInterval(interval);
    };
  }, [percent]);
  return (
    <RadialChart
      data={[{ angle: percent }, { angle: 100 - percent }]}
      animation
      width={300}
      height={300}
      radius={100}
      innerRadius={80}
    />
  );
}

export default VisPieChart;
