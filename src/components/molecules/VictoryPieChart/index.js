import React, { useState, useEffect } from "react";
import { VictoryPie, VictoryAnimation, VictoryLabel } from "victory";

function VictoryPieChart() {
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
    <svg viewBox="0 0 400 400" width="100%" height="100%">
      <defs>
        {/* (0.00px at 50% 0%, #FFCA28 -nan%, #20C0B6 inf%, #5AC391 inf%, #FFCA28 -nan%) */}
        <linearGradient id="gradient1" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFCA28" />
          <stop offset="100%" stopColor="#5AC391" />
        </linearGradient>
      </defs>
      <VictoryPie
        standalone={false}
        width={400}
        height={400}
        data={[{ x: 1, y: 100 }]}
        innerRadius={120}
        cornerRadius={25}
        labels={() => null}
        style={{
          data: {
            fill: "#f2f2f2"
          }
        }}
      />
      <VictoryPie
        standalone={false}
        width={400}
        height={400}
        data={[{ x: 1, y: percent }, { x: 2, y: 100 - percent }]}
        innerRadius={120}
        cornerRadius={25}
        labels={() => null}
        colorScale={["url(#gradient1)"]}
        style={{
          data: {
            fill: d => {
              return d.x === 1 ? "url(#gradient1)" : "transparent";
            }
          }
        }}
      />
      <VictoryAnimation>
        {newProps => {
          return (
            <VictoryLabel
              textAnchor="middle"
              verticalAnchor="middle"
              x={200}
              y={200}
              text={`${Math.round(percent)}%`}
              style={{ fontSize: 45 }}
            />
          );
        }}
      </VictoryAnimation>
    </svg>
  );
}

export default VictoryPieChart;
