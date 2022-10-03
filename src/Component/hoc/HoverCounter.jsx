import { useState } from "react";
import WithCounter from "./withCounter";

const HoverCounter = ({ count, incrementCount }) => {
  return (
    <button onMouseEnter={incrementCount}>hover to count : {count}</button>
  );
};

export default WithCounter(HoverCounter,10);
