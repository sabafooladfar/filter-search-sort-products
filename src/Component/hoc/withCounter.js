import { useState } from "react";

const WithCounter = (WrappedComponent , countNumber) => {
  const UpdateComponent = () => {
    const [count, setCount] = useState(0);
    const incrementCount = () => {
      setCount(count + countNumber);
    };
    return <WrappedComponent count={count} incrementCount={incrementCount} />;
  };
  return UpdateComponent;
};

export default WithCounter;
