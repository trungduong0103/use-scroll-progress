import React from "react";
import "./styles.css";
import { useScrollProgress } from "./useScrollProgress";

export default function App() {
  const ref = React.useRef<HTMLDivElement | null>(null);
  // console.log(ref);
  const percentage = useScrollProgress(ref);
  console.log(percentage);

  return (
    <div className="App">
      {/* <progress
        style={{ width: "100%" }}
        value={percentage}
        max={450}
      ></progress> */}
      <div
        ref={ref}
        style={{
          height: 300,
          width: 450,
          border: "2px dashed black",
          overflow: "scroll"
        }}
      >
        <div style={{ height: 450, border: "2px dashed red" }}></div>
      </div>
    </div>
  );
}
