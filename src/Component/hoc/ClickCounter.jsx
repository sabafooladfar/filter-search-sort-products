import { useState } from "react";
import WithCounter from "./withCounter";

const ClickCounter = ({ count, incrementCount }) => {
  return (
    <div>
      <button onClick={incrementCount}>click to count : {count}</button>
    </div>
  );
};

export default WithCounter(ClickCounter, 5);
