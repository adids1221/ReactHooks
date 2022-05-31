import React, { useState, useCallback } from "react";
import List from "./List";

function CallbackComponent() {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);

  //On every component render the getItems function get recreated this is the reason we are going to use the useCallback hook
  //**Bad practice** is to wrap every function with useCallback, such usage of useCallback() without profiling makes the component slower.

  //The difference between uesMemo and useCallback that is useMemo return a value of a function but useCallback returns the function it's self

  const getItems = useCallback(
    (inc) => {
      return [number + inc, number + inc + 1, number + inc + 2];
    },
    [number]
  );

  const theme = {
    backgroundColor: dark ? "#333" : "#FFF",
    color: dark ? "#FFF" : "#333",
  };

  return (
    <div style={theme}>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark((prevDark) => !prevDark)}>
        Toggle theme
      </button>
      <List getItems={getItems} />
    </div>
  );
}

export default CallbackComponent;
