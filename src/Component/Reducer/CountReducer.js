import React, { useReducer } from "react";

const initialState = 0;
const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return state + action.value ;
    case "reset":
      return initialState;
    default:
      return;
  }
};

const CountReducer = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  const [count2, dispatch2] = useReducer(reducer, initialState);
  return (
    <div>
      <p>count : {count}</p>
      <p>count2 : {count2}</p>
      <button onClick={() => dispatch({ type: "add", value: 1 })}>
        click to add one
      </button>
      <button onClick={() => dispatch({ type: "add", value: 6 })}>
        click to add six
      </button>
      <button onClick={() => dispatch2({ type: "add", value: 2 })}>
        click to add two
      </button>
      <button onClick={() => dispatch2({ type: "add", value: 5 })}>
        click to add five
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>
        click to reset
      </button>
      <button onClick={() => dispatch2({ type: "reset" })}>
        click to reset
      </button>
    </div>
  );
};

export default CountReducer;
