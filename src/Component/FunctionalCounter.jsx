import { useEffect, useState } from "react";

const FunctionalCounter = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("document update");
    document.title = `clicked ${count} times`;
  }, [count]);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>count : {count}</button>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <p>{name}</p>
    </div>
  );
};

export default FunctionalCounter;
