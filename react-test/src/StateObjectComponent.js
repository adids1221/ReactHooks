import React from "react";
import { useState, useEffect } from "react";
//useState inside an object

/* 
what is the diffrent between:
A. useState(func())
B. useState(()=>func())
A - will run every time the state is changed and on every component re-render
B - will run only on state init
*/

const StateObjectComponent = () => {
  const [state, setState] = useState({ age: 19, siblingsNum: 4 });
  const handleClick = (val) => {
    console.log(
      `Current state: ${Object.values(state)} || Object value: ${val}`
    );
    //using the spread operator to get the last state and override only the value we want to change
    setState({
      ...state,
      [val]: state[val] + 1,
    });
  };
  const { age, siblingsNum } = state;

  useEffect(() => {
    console.log(`New state: ${Object.values(state)}`);
  }, [state]);

  return (
    <div>
      <p>Today I am {age} Years of Age</p>
      <p>I have {siblingsNum} siblings</p>

      <div>
        <button onClick={handleClick.bind(null, "age")}>Get older!</button>
        <button onClick={handleClick.bind(null, "siblingsNum")}>
          More siblings!
        </button>
      </div>
    </div>
  );
};

export default StateObjectComponent;
