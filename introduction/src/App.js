import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div data-test="component-app">
      <h1 data-test="counter-display">
        The counter is <span data-test="count">{count}</span>{" "}
      </h1>
      <button data-test="increment-button" onClick={() => setCount(count + 1)}>
        Increment counter
      </button>
      <button
        data-test="decrement-button"
        onClick={count <= 0 ? count : () => setCount(count - 1)}
      >
        Decrement counter
      </button>
      <section className="sec">
        {count === 0 && (
          <span data-test="result-span">not increment but value is 0</span>
        )}
      </section>
    </div>
  );
}

export default App;
