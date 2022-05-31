import React, { useMemo, useState } from "react";

//useMemo
//React has a built-in hook called useMemo that allows you to memoize expensive functions so that you can avoid calling them on every render
//The useMemo will save the last value of the function in the memory, we should not use this hook on every instance

//While performance can be improved by using this hook, it can also slow down your application if you overuse it. The more you use the hook, the more your application has to allocate memory.
function MemoComponent() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);
  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);
  const themeStyles = useMemo(() => {
    return {
      backgroundColor: dark ? "black" : "white",
      color: dark ? "white" : "black",
    };
  }, [dark]);

  return (
    <>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark((prevDark) => !prevDark)}>
        Change Theme
      </button>
      <div style={themeStyles}>{doubleNumber}</div>
    </>
  );
}

//This function will be called every render and every call to doubleNumber
function slowFunction(num) {
  console.log("Slow func");
  for (let i = 0; i <= 1000000000; i++) {
    return num * 2;
  }
}

export default MemoComponent;
