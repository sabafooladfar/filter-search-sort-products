import React from "react";
import { useCount, useCountAction } from "./CounterProvider";

const CounterOne = () => {
  const count = useCount();
  const dispatch = useCountAction();
  return (
    <div>
      <p>count : {count}</p>
      <button onClick={()=> dispatch({type:"add" , value: 1})}>click to add one</button>
      <button onClick={()=> dispatch({type:"decrement" , value: 1})}>click to minus one</button>
      <button onClick={()=> dispatch({type:"reset"})}>click to reset</button>
    </div>
  );
};

export default CounterOne;
