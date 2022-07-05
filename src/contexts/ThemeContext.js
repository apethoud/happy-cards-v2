import React, { useState } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

const ThemeContext = React.createContext("light");

const ThemeProvider = (props) => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <StyledThemeProvider theme={{ theme }}>
        {props.children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
