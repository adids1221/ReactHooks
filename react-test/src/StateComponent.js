import React, { useState, useEffect } from "react";
//Using useState hook
function StateComponent() {
  const [count, setCount] = useState(0);
  const [age, setAge] = useState(27);
  const inc = () => setCount(count + 1);
  const dec = () => setCount(count - 1);
  const older = () => setAge(age + 1);
  const younger = () => setAge(age - 1);

  useEffect(() => {
    console.log("This will be logged after every render!");
  });

  useEffect(() => {
    console.log("This will be logged after every count cahnge!");
  }, [count]);

  return (
    <>
      <div> Count variable is {count}</div>
      <button onClick={inc}>Increment </button>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>
        Decrement{" "}
      </button>
      <div> Age variable is {age}</div>
      <button onClick={older}>Older </button>
      <button onClick={younger}>Younger </button>
    </>
  );
}

export default StateComponent;
