import React, { Component, createContext, useState } from "react";
import ClickCounter from "./ClickCounter";
import HoverCounter from "./HoverCounter";
import StateComponent from "./StateComponent";
import StateObjectComponent from "./StateObjectComponent";
import MemoComponent from "./MemoComponent";
import RefComponent from "./RefComponent";
import RefComponentEx2 from "./RefComponentEx2";
import FunctionContextComponent from "./FunctionContextComponent";
import ClassContextComponent from "./ClassContextComponent";
import { ThemeProvider } from "./ThemeContext";
import ReducerComponent from "./ReducerComponent";
import CallbackComponent from "./CallbackComponent";
import useLocalstorage from "./useLocalstorage";

/*
You can use any of the above components inside the app component.
In the README file you can see the hooks used inisde each component.
*/

//I used the App component as class based component for the pure component examples

function App() {
  const [name, setName] = useLocalstorage("name", "");
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
}

export default App;

/* 
Set this code in the App component for the useContext hook

{ Wrap provider for passing down props || wrapping and passing down the state}
<ThemeProvider>
<ReducerComponent />
{<ClassContextComponent /> }
</ThemeProvider>
*/
