import React, { useState } from "react";
const Calculator = () => {
  const [result, setResult] = useState("");

  const handleClick = (event) => {
    setResult(result.concat(event.target.name));
  };
  const handleclear = () => {
    setResult("");
  };
  const handleback = () => {
    setResult(result.slice(0, -1));
  };
  const calc = () => {
    setResult(String(eval(result)));
  };

  return (
    <div className="container">
        <h1>Calculator</h1>
      

      <div className="input">
      <form >
        <input className="inp" type="text" name="input" value={result} />
      </form>
      </div>
      <div className="buttons">
        <button className="btn" type="button" onClick={handleclear}>
          clear
        </button>
        <button className="btn" type="button" onClick={handleback}>
          c
        </button>
        <button className="btn" type="button" name="." onClick={handleClick}>
          .
        </button>
        <button className="btn" type="button" name="+" onClick={handleClick}>
          +
        </button>
        <button className="btn" type="button" name="1" onClick={handleClick}>
          1
        </button>
        <button className="btn" type="button" name="2" onClick={handleClick}>
          2
        </button>
        <button className="btn" type="button" name="3" onClick={handleClick}>
          3
        </button>
        <button className="btn" type="button" name="-" onClick={handleClick}>
          -
        </button>
        <button className="btn" type="button" name="4" onClick={handleClick}>
          4
        </button>
        <button className="btn" type="button" name="5" onClick={handleClick}>
          5
        </button>
        <button className="btn" type="button" name="6" onClick={handleClick}>
          6
        </button>
        <button className="btn" type="button" name="*" onClick={handleClick}>
          *
        </button>
        <button className="btn" type="button" name="7" onClick={handleClick}>
          7
        </button>
        <button className="btn" type="button" name="8" onClick={handleClick}>
          8
        </button>
        <button className="btn" type="button" name="9" onClick={handleClick}>
          9
        </button>
        <button className="btn" type="button" name="0" onClick={handleClick}>
          0
        </button>
        <button className="btn" type="button" name="%" onClick={handleClick}>
          %
        </button>
        <button className="btn" type="button" name="/" onClick={handleClick}>
          /
        </button>
        <button className="btn" id="eqal" type="button" onClick={calc}>
          =
        </button>
      </div>
    </div>
  );
};
export default Calculator;
