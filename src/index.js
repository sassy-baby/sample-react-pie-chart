import React, { useState } from "react";
import ReactDOM from "react-dom";
import VictoryPieChart from "./components/molecules/VictoryPieChart";
import NivoPieChart from "./components/molecules/NivoPieChart";
import VisPieChart from "./components/molecules/VisPieChart";
import VictoryLineChart from "./components/molecules/VictoryLineChart";

import "./styles.css";

function App() {
  const [dispChart, setDispChart] = useState("line");

  return (
    <div className="App">
      {dispChart === "pie" ? (
        <>
          <div className="chart">
            <VisPieChart />
            <NivoPieChart />
            <VictoryPieChart />
          </div>
          <button
            onClick={() => {
              setDispChart("line");
            }}
          >
            Line
          </button>
        </>
      ) : (
        <>
          <div className="chart">
            <VictoryLineChart />
          </div>
          <button
            onClick={() => {
              setDispChart("pie");
            }}
          >
            Pie
          </button>
        </>
      )}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
