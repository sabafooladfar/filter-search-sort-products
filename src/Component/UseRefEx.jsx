import React, { useEffect, useRef, useState } from "react";

const UseRefEx = () => {
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef();
  const [count, setCount] = useState(0);
  const countRef = useRef();
  const changeHandler = (e) => {
    setInputValue(e.target.value);
  };
  useEffect(() => {
    countRef.current = count;
  }, [count]);
  return (
    <div>
      <input
        type="text"
        ref={inputRef}
        value={inputValue}
        onChange={changeHandler}
      />
      <button onClick={() => setCount(Math.ceil(Math.random() * 50))}>
        show random number
      </button>
      <p>
        now : {count}
        before : {countRef.current}
      </p>
    </div>
  );
};

export default UseRefEx;
