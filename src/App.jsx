import { useState } from "react";

export default function App() {
  const [current, setCurrent] = useState("");

  // handle button click
  const handleClick = (value) => {
    setCurrent(current + value);
  };

  // clear
  const handleClear = () => {
    setCurrent("");
  };

  // calculate
  const handleResult = () => {
    try {
      setCurrent(eval(current).toString()); // for demo
    } catch {
      setCurrent("Error");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h1>Calculator</h1>
      <input
        type="text"
        value={current}
        readOnly
        style={{ width: "200px", height: "30px", textAlign: "right" }}
      />
      <br />
      <br />
      <div>
        <button onClick={handleClear}>C</button>
        <button onClick={() => handleClick("1")}>1</button>
        <button onClick={() => handleClick("2")}>2</button>
        <br />
        <button onClick={() => handleClick("+")}>+</button>
        <button onClick={() => handleClick("3")}>3</button>
        <button onClick={() => handleClick("4")}>4</button>
        <br />
        <button onClick={() => handleClick("-")}>-</button>
        <button onClick={() => handleClick("5")}>5</button>
        <button onClick={() => handleClick("6")}>6</button>
        <br />
        <button onClick={() => handleClick("*")}>*</button>
        <button onClick={() => handleClick("7")}>7</button>
        <button onClick={() => handleClick("8")}>8</button>
        <br />
        <button onClick={() => handleClick("/")}>/</button>
        <button onClick={handleResult}>=</button>
        <button onClick={() => handleClick("9")}>9</button>
        <br />
        <button onClick={() => handleClick("0")}>0</button>
        <button onClick={() => handleClick(".")}>.</button>
      </div>
    </div>
  );
}
