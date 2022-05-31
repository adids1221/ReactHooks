import React, { useRef, useEffect, useState } from "react";

//useRef
//Ref does not cause the component to re-rendered when it's get updated
function RefComponent() {
  const [name, setName] = useState("Adi");
  const prevName = useRef("");
  //const renderCount = useRef(0);
  //useRef returns an object {renderCount:0}

  //   function focus() {
  //     inputRef.current.focus();
  //     //Bad practice to change the value of the input -> Dont change the state value
  //     inputRef.current.value = inputRef.current.value.concat("INPUT");
  //     console.log(name);
  //   }

  useEffect(() => {
    prevName.current = name;
  }, [name]);

  return (
    <>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <div>
        My is {name} and it used to be {prevName.current}
      </div>
      {/* <div>I renderd {renderCount.current} times</div> */}
      {/* <button onClick={focus}>Click me to focus on input</button> */}
    </>
  );
}

export default RefComponent;
