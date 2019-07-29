import React from "react";
import ReactDOM from "react-dom";
import VictoryPieChart from "./components/molecules/VictoryPieChart";
import NivoPieChart from "./components/molecules/NivoPieChart";
import VisPieChart from "./components/molecules/VisPieChart";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <VisPieChart />
      <NivoPieChart />
      <VictoryPieChart />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
