import { useEffect, useState } from "react";

const FunctionalTimer = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const myTimer = setInterval(() => {
      console.log("hi");
      setCount(count + 1);
    }, 1000);
    return () => clearInterval(myTimer);
  }, []);
  return <div>class interval</div>;
};

export default FunctionalTimer;
