import { useState } from "react";

import "./App.css";
import ClockHeading from "./components/ClockHeading";
import ClockSlogan from "./components/ClockSlogan";
import ClockTime from "./components/ClockTime";

function App() {
  return (
    <>
      <center className="main-container">
        <ClockHeading></ClockHeading>
        <ClockSlogan></ClockSlogan>
        <ClockTime></ClockTime>
      </center>
    </>
  );
}

export default App;
