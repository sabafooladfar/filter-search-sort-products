import React, { useRef, useState } from "react";

const UseRefEx = () => {
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef();
  const changeHandler = (e) => {
    setInputValue(e.target.value);
  };
  const resetHandler = () => {
    setInputValue("");
    inputRef.current.focus();
  };
  return (
    <div>
      <input type="text" ref={inputRef} value={inputValue} onChange={changeHandler} />
      <button onClick={resetHandler}>Reset</button>
    </div>
  );
};

export default UseRefEx;
