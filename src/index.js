import React from "react";
import ReactDOM from "react-dom";
// import VictoryPieChart from "./components/molecules/VictoryPieChart";
import NivoPieChart from "./components/molecules/NivoPieChart";
// import VisPieChart from "./components/molecules/VisPieChart";
import "./styles.css";

function App() {
  return (
    <div className="App">
      {/* <VictoryPieChart /> */}
      <NivoPieChart />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
