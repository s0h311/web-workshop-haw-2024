import { useState } from "react";
import "./App.css";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <main>
      <div className="counter-wrapper">
        <p className="counter-text">Counter:</p>
        <p className="count">{count}</p>
      </div>

      <button
        className="increase-button"
        onClick={() => setCount((count) => count + 1)}
      >
        Increase
      </button>
    </main>
  );
}
