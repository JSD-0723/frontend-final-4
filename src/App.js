import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import Home from "./Pages/Home";
import { ThemeProvider } from "@mui/material";
import { darkTheme, lightTheme, theme } from "./Contexts/Theme";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
