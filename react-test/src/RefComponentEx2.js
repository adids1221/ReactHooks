import { useRef, useState, useEffect } from "react";
/* 
The component Stopwatch uses setInterval(callback, time) 
timer function to increase each second the counter of a stopwatch. The timer id is stored into a reference timerIdRef
*/
function RefComponentEx2() {
  const timerIdRef = useRef(0);
  const [count, setCount] = useState(0);
  const startHandler = () => {
    if (timerIdRef.current) {
      return;
    }
    timerIdRef.current = setInterval(() => setCount((c) => c + 1), 1000);
    console.log(`timerIdRef ref init! => ${timerIdRef.current}`);
  };
  const stopHandler = () => {
    clearInterval(timerIdRef.current);
    timerIdRef.current = 0;
    console.log(`timerIdRef changed the ref! => ${timerIdRef.current.value}`);
  };
  useEffect(() => {
    return () => clearInterval(timerIdRef.current.value);
  }, []);
  return (
    <div>
      <div>Timer: {count}s</div>
      <div>
        <button onClick={startHandler}>Start</button>
        <button onClick={stopHandler}>Stop</button>
      </div>
    </div>
  );
}

export default RefComponentEx2;
