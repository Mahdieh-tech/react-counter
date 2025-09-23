import React, { useState } from "react";
import "./Counter.css";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div className="page-background">
      <div className="counter-container">
        <h1 className="title">✨ Magic Counter ✨</h1>
        <p className="count-display">{count}</p>

        <div className="button-group">
          <button className="counter-button decrement" onClick={decrement}>
            – Decrement
          </button>
          <button className="counter-button reset" onClick={reset}>
            Reset
          </button>
          <button className="counter-button increment" onClick={increment}>
            + Increment
          </button>
        </div>
      </div>
    </div>
  );
}

export default Counter;
