import React from "react";
import ReactDOM from "react-dom";
import { RadialChart } from "react-vis";

import "./styles.css";
const myData = [{ angle: 80 }, { angle: 20 }];

function App() {
  return (
    <div className="App">
      <RadialChart
        data={myData}
        animation={{ damping: 9, stiffness: 300 }}
        width={300}
        height={300}
        radius={100}
        innerRadius={80}
      />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
