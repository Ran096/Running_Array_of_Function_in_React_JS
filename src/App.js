import "./styles.css";
import React, { useEffect } from "react";

export default function App() {
  const fnArray = [
    {
      fn: function add(a, b) {
        return a + b;
      }
    },
    {
      fn: function substract(a, b) {
        return a - b;
      }
    },
    {
      fn: function multiply(a, b) {
        return a * b;
      }
    },
    {
      fn: function divide(a, b) {
        return a / b;
      }
    }
  ];
  const mainFun = () => {
    let result = fnArray.map((fn) => {
      return fn.fn(20, 10);
    });
    console.log(result);
  };
  useEffect(() => {
    mainFun();
  }, []);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
