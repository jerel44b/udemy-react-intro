import { useState, useEffect } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => console.log("run from useEffect"), 3000);
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  const Increase = () => {
    setCounter((prev) => prev + 1);
  };

  const Decrease = () => {
    setCounter((prev) => prev - 1);
  };

  const Reset = () => {
    setCounter(0);
  };

  return (
    <>
      <h1>Counter</h1>
      <button onClick={Increase}>Increase</button>
      <button onClick={Decrease}>Decrease</button>
      <button onClick={Reset}>Reset</button>
      <h2>Count: {counter}</h2>
    </>
  );
}

export default Counter;
