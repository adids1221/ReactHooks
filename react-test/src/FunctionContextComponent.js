import React, { useContext } from "react";
// import { ThemeContext } from "./App";
import { useTheme, useThemeUpdate } from "./ThemeContext";

function FunctionContextComponent() {
  const darkTheme = useTheme(); //will return the context provider
  const toggleTheme = useThemeUpdate(); //will return the toogleTheme context
  const themestyles = {
    backgroundColor: darkTheme ? "#333" : "#CCC",
    color: darkTheme ? "#CCC" : "#333",
    padding: "2rem",
    margin: "2rem",
  };
  return (
    <>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <div style={themestyles}>Function Theme</div>
    </>
  );
}

export default FunctionContextComponent;
