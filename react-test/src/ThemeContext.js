import React, { useContext, useState, createContext } from "react";

const ThemeContext = createContext();
const ThemeUpdateContext = createContext();

//Custom hooks => easy acces to the theme value and the toogleTheme value
export function useTheme() {
  return useContext(ThemeContext);
}

export function useThemeUpdate() {
  return useContext(ThemeUpdateContext);
}

export function ThemeProvider({ children }) {
  // instead of using the darkTheme state here in the custom hook we can use it in the classic way and init it in the App component
  const [darkTheme, setDarkTheme] = useState(true);
  function toggleTheme() {
    setDarkTheme((prevDarkTheme) => !prevDarkTheme);
  }

  return (
    <ThemeContext.Provider value={darkTheme}>
      <ThemeUpdateContext.Provider value={toggleTheme}>
        {children}
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  );
}
