import React from "react";
import { ResponsiveLine } from "@nivo/line";
import { now, lastYear } from "../../../data/line";
import { nivoSample } from "../../../data/sample";

const NivoLineChart = () => {
  return (
    <div style={{ height: 400, width: 400 }}>
      <ResponsiveLine
        data={nivoSample}
        // xScale={{ type: "point" }}
        // yScale={{ type: "linear", stacked: true, min: "auto", max: "auto" }}
        // axisTop={null}
        // axisRight={null}
        // axisBottom={{
        //   orient: "bottom",
        //   tickSize: 5,
        //   tickPadding: 5,
        //   tickRotation: 0,
        //   legend: "transportation",
        //   legendOffset: 36,
        //   legendPosition: "middle"
        // }}
        // axisLeft={{
        //   orient: "left",
        //   tickSize: 5,
        //   tickPadding: 5,
        //   tickRotation: 0,
        //   legend: "count",
        //   legendOffset: -40,
        //   legendPosition: "middle"
        // }}
        // colors={{ scheme: "nivo" }}
        // pointSize={2}
        // pointColor={{ theme: "background" }}
        // pointBorderWidth={4}
        // pointBorderColor={{ from: "serieColor" }}
        // pointLabel="y"
        // pointLabelYOffset={-12}
        // useMesh={true}
        // legends={[
        //   {
        //     anchor: "bottom-right",
        //     direction: "column",
        //     justify: false,
        //     translateX: 100,
        //     translateY: 0,
        //     itemsSpacing: 0,
        //     itemDirection: "left-to-right",
        //     itemWidth: 80,
        //     itemHeight: 20,
        //     itemOpacity: 0.75,
        //     symbolSize: 12,
        //     symbolShape: "circle",
        //     symbolBorderColor: "rgba(0, 0, 0, .5)",
        //     effects: [
        //       {
        //         on: "hover",
        //         style: {
        //           itemBackground: "rgba(0, 0, 0, .03)",
        //           itemOpacity: 1
        //         }
        //       }
        //     ]
        //   }
        // ]}
      />
    </div>
  );
};

export default NivoLineChart;
